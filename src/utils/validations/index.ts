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
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
		errorMessages.password.SHOULD_MATCH,
	);

export const validateConfirmPassword = yup
	.string()
	.required()
	.strict()
	.trim()
	.oneOf([yup.ref('password'), null], 'Passwords must match');
