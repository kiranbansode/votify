import * as yup from 'yup';
import { errorMessages } from './errorMessages';

export const firstName = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.required(errorMessages.name.FIRSTNAME_IS_REQUIRED);

export const middleName = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.required(errorMessages.name.MIDDLENAME_IS_REQUIRED);

export const lastName = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.required(errorMessages.name.LASTNAME_IS_REQUIRED);

export const std = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.test('is_noSelect', 'Select Your Standard', (value) => value !== '_noSelect')
	.required(errorMessages.profile.std.STD_IS_REQUIRED);

export const div = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.test('is_noSelect', 'Select Your Standard', (value) => value !== '_noSelect')
	.required(errorMessages.profile.div.DIV_IS_REQUIRED);

export const gender = yup.string().strict().trim(errorMessages.yup.TRIM).required();

export const schoolName = yup.string().strict().trim(errorMessages.yup.TRIM).required();

export const rollNo = yup.string().strict().trim(errorMessages.yup.TRIM);

export const dob = yup.string().strict().trim(errorMessages.yup.TRIM).nullable().required();

export const mobileNo = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.matches(
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
		errorMessages.profile.mobile.MOBILE_IS_INVALID,
	)
	.required(errorMessages.profile.mobile.MOBILE_IS_REQUIRED);

export const email = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.email(errorMessages.email.INVALID_EMAIL)
	.required(errorMessages.email.EMAIL_IS_REQUIRED);

export const password = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.matches(
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
		errorMessages.password.SHOULD_MATCH,
	)
	.required(errorMessages.password.PASSWORD_IS_REQUIRED);

export const confirmPassword = yup
	.string()
	.strict()
	.trim(errorMessages.yup.TRIM)
	.oneOf([yup.ref('password'), null], errorMessages.confirmPassword.CONFIRM_PASSWORD_NOT_MATCH)
	.required(errorMessages.confirmPassword.CONFIRM_PASSOWRD_IS_REQUIRED);

const validations = {
	firstName,
	middleName,
	lastName,
	gender,
	dob,
	schoolName,
	std,
	div,
	rollNo,
	mobileNo,
	email,
	password,
	confirmPassword,
};

export default validations;
