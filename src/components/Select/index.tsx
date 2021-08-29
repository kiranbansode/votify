import { FormHelperText, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { Controller, FieldErrors, Control } from 'react-hook-form';
import InputWrapper from 'styled/InputWrapper';
import errorFinder from 'utils/helperFunctions/errorFinder';

export interface option {
	value: string | number;
	menu: string;
}
export interface SelectInputFieldProps {
	inputError: FieldErrors;
	control: Control;
	inputLabel: string;
	options: option[];
}

const SelectInputField = ({ inputError, control, inputLabel, options }: SelectInputFieldProps) => {
	let name = '';
	const error = name ?? errorFinder(name, inputError);

	return (
		<InputWrapper>
			<FormControl fullWidth error={Boolean(error)}>
				<InputLabel id={inputLabel}>{capitalizeFirstLetter(inputLabel)}</InputLabel>
				<Controller
					control={control}
					name={inputLabel.toLowerCase()}
					render={({ field }) => {
						name = field.name.toLowerCase();
						return (
							<Select
								labelId={inputLabel}
								id={inputLabel}
								label={capitalizeFirstLetter(inputLabel)}
								{...field}
							>
								{options.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.menu}
									</MenuItem>
								))}
							</Select>
						);
					}}
				/>
				<FormHelperText>{error}</FormHelperText>
			</FormControl>
		</InputWrapper>
	);
};

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default SelectInputField;
