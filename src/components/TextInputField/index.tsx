import { TextField } from '@material-ui/core';
import { FieldErrors } from 'react-hook-form';
import errorFinder from 'utils/helperFunctions/errorFinder';
import InputWrapper from 'styled/InputWrapper';

interface Register {
	name: string;
	ref: any;
}

interface TextInputFieldProps {
	inputError: FieldErrors;
	inputLabel: string;
	register: Register;
	variant?: 'standard' | 'filled' | 'outlined' | undefined;
}

const TextInputField = ({
	inputError,
	inputLabel,
	register,
	variant,
	...textInputFieldProps
}: TextInputFieldProps) => {
	/* ...registerProps contains following props which needs to assign to TextField to extract values
	 	1. onChange :- prop to subscribe the input change event.
	 	2. onBlur :- prop to subscribe the input blur event.
	 */
	const { name, ref, ...registerProps } = register;

	//  Return Error message
	const error = errorFinder(name, inputError);

	return (
		<InputWrapper>
			<TextField
				fullWidth
				error={Boolean(error)}
				helperText={error}
				id={name}
				inputRef={ref}
				label={inputLabel}
				name={name}
				variant={variant || 'outlined'}
				{...registerProps}
				{...textInputFieldProps}
			/>
		</InputWrapper>
	);
};

export default TextInputField;
