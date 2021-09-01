import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	FormHelperText,
} from '@material-ui/core';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import InputWrapper from 'styled/InputWrapper';
import errorFinder from 'utils/helperFunctions/errorFinder';

interface RadioButtonOption {
	radioLabel: string;
	value: string | number;
}
interface RadioInputFieldProps {
	inputErrors: FieldErrors;
	control: Control;
	row?: boolean;
	inputLabel: string;
	fieldName: string;
	options: RadioButtonOption[];
}

const RadioInputField = ({
	inputErrors,
	row,
	control,
	options,
	inputLabel,
	fieldName,
}: RadioInputFieldProps) => {
	const error = errorFinder(fieldName, inputErrors);

	return (
		<InputWrapper>
			<FormControl fullWidth component="fieldset" error={Boolean(error)}>
				<FormLabel component="legend">{inputLabel}</FormLabel>
				<Controller
					control={control}
					name={fieldName}
					render={({ field }) => (
						<RadioGroup
							aria-label={inputLabel.toLowerCase()}
							row={Boolean(row)}
							{...field}
						>
							{options.map(({ radioLabel, value }) => (
								<FormControlLabel
									key={value}
									value={value}
									control={<Radio />}
									label={radioLabel}
								/>
							))}
						</RadioGroup>
					)}
				/>
				<FormHelperText>{error}</FormHelperText>
			</FormControl>
		</InputWrapper>
	);
};

export default RadioInputField;
