import { TextField } from '@material-ui/core';
import { FieldErrors } from 'react-hook-form';
import nestedErrorFinder from 'utils/helperFunctions/nestedErrorFinder';

interface Register {
	name: string;
	ref: any;
}

interface TextInputFieldProps {
	inputError: FieldErrors;
	inputLabel: string;
	isInputFieldNested?: boolean;
	register: Register;
	variant?: 'standard' | 'filled' | 'outlined' | undefined;
}

const TextInputField = ({
	inputError,
	inputLabel,
	isInputFieldNested,
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
	const fieldError = isInputFieldNested
		? nestedErrorFinder(name, inputError)
		: inputError[name]?.message;

	return (
		<TextField
			fullWidth
			error={Boolean(fieldError)}
			helperText={fieldError}
			name={name}
			id={name}
			inputRef={ref}
			label={inputLabel}
			variant={variant || 'outlined'}
			{...registerProps}
			{...textInputFieldProps}
		/>
	);
};

export default TextInputField;
