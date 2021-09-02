import { FormHelperText, FormControl } from '@material-ui/core';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import DatePicker from '@material-ui/lab/DatePicker';
import InputWrapper from 'styled/InputWrapper';
import errorFinder from 'utils/helperFunctions/errorFinder';

interface DateInputFieldProps {
	control: Control;
	fieldName: string;
	inputLabel: string;
	inputErrors: FieldErrors;
}

const DateInputField = ({ control, fieldName, inputLabel, inputErrors }: DateInputFieldProps) => {
	const error = errorFinder(fieldName, inputErrors);

	return (
		<InputWrapper>
			<FormControl fullWidth error={Boolean(error)}>
				<Controller
					control={control}
					name={fieldName}
					render={({ field }) => (
						<DatePicker
							disableFuture
							showTodayButton
							inputFormat="dd/MM/yyyy"
							label={inputLabel}
							renderInput={(params) => <TextField {...params} />}
							{...field}
						/>
					)}
				/>
				<FormHelperText>{error}</FormHelperText>
			</FormControl>
		</InputWrapper>
	);
};

export default DateInputField;
