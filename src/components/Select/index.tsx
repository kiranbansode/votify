import { FormHelperText, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { Controller, FieldErrors, Control } from 'react-hook-form';
import InputWrapper from 'styled/InputWrapper';
import errorFinder from 'utils/helperFunctions/errorFinder';

export interface Option {
	value: string | number;
	option: string;
}

export interface SelectInputFieldProps {
	inputErrors: FieldErrors;
	control: Control;
	inputLabel: string;
	selectFieldName: string;
	options: Option[];
}

const SelectInputField = ({
	inputErrors,
	control,
	inputLabel,
	options,
	selectFieldName,
}: SelectInputFieldProps) => {
	const error = errorFinder(selectFieldName, inputErrors);

	return (
		<InputWrapper>
			<FormControl fullWidth error={Boolean(error)}>
				<InputLabel id={selectFieldName}>{inputLabel}</InputLabel>
				<Controller
					control={control}
					name={selectFieldName}
					render={({ field }) => (
						<Select
							labelId={selectFieldName}
							id={selectFieldName}
							label={inputLabel}
							{...field}
						>
							{options.map(({ value, option }) => (
								<MenuItem key={value} value={value}>
									{option}
								</MenuItem>
							))}
						</Select>
					)}
				/>
				<FormHelperText>{error}</FormHelperText>
			</FormControl>
		</InputWrapper>
	);
};

export default SelectInputField;
