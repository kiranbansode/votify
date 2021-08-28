import * as yup from 'yup';
import { errorMessages } from './errorMessages';

export const validateEmailID = yup
	.string()
	.required(errorMessages.email.EMAIL_IS_REQUIRED)
	.strict()
	.trim(errorMessages.yup.TRIM)
	.email(errorMessages.email.INVALID_EMAIL);

export const validatePassword = yup
	.string()
	.required(errorMessages.password.PASSWORD_IS_REQUIRED)
	.strict()
	.trim(errorMessages.yup.TRIM)
	.matches(
		// /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
		// /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
		/ ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){8,16}$/,
		errorMessages.password.SHOULD_MATCH,
	);

export const validateConfirmPassword = yup
	.string()
	.required()
	.strict()
	.trim()
	.oneOf([yup.ref('password'), null], 'Passwords must match');
