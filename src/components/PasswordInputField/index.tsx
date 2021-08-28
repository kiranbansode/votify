/*
	Author : Kiran Ashok Bansode
*/

import { useState } from 'react';
import { FieldErrors } from 'react-hook-form';
import {
	FormControl,
	OutlinedInput,
	InputAdornment,
	FormHelperText,
	InputLabel,
	IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import errorFinder from 'utils/helperFunctions/errorFinder';
import InputWrapper from 'styled/InputWrapper';

interface Register {
	name: string;
	ref: any;
}

interface PasswordInputFieldProps {
	inputError: FieldErrors;
	inputLabel: string;
	register: Register;
}

const PasswordInputField = ({
	inputError,
	inputLabel,
	register,
	...passwordInputFieldProps
}: PasswordInputFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);

	/* ...registerProps contains following props which needs to assign to TextField to extract values
	 	1. onChange :- prop to subscribe the input change event.
	 	2. onBlur :- prop to subscribe the input blur event.
	 */
	const { ref, name, ...registerProps } = register;

	//  Return Error message
	const fieldError = errorFinder(name, inputError);

	const handleShowPassword = () => setShowPassword(!showPassword);

	return (
		<InputWrapper>
			<FormControl fullWidth error={Boolean(fieldError)} variant="outlined">
				<InputLabel htmlFor={name}>{inputLabel}</InputLabel>
				<OutlinedInput
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								edge="end"
								onChange={handleShowPassword}
								onClick={handleShowPassword}
							>
								{showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
					id={name}
					inputRef={ref}
					name={name}
					label={inputLabel}
					type={showPassword ? 'text' : 'password'}
					{...registerProps}
					{...passwordInputFieldProps}
				/>
				{fieldError ? <FormHelperText>{fieldError}</FormHelperText> : null}
			</FormControl>
		</InputWrapper>
	);
};

export default PasswordInputField;
