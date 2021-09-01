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
	fieldName: string;
	options: Option[];
}

const SelectInputField = ({
	inputErrors,
	control,
	inputLabel,
	options,
	fieldName,
}: SelectInputFieldProps) => {
	const error = errorFinder(fieldName, inputErrors);

	return (
		<InputWrapper>
			<FormControl fullWidth error={Boolean(error)}>
				<InputLabel id={fieldName}>{inputLabel}</InputLabel>
				<Controller
					control={control}
					name={fieldName}
					render={({ field }) => (
						<Select id={fieldName} label={inputLabel} labelId={fieldName} {...field}>
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
