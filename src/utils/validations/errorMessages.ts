export const errorMessages = {
	yup: {
		TRIM: 'Blank Space is not allowed',
	},
	name: {
		FIRSTNAME_IS_REQUIRED: '** Firstname is required',
		MIDDLENAME_IS_REQUIRED: '** Middlename is required',
		LASTNAME_IS_REQUIRED: '** Lastname is required',
	},
	password: {
		PASSWORD_IS_REQUIRED: '** Password is required',
		SHOULD_MATCH:
			'Must be min 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character',
	},
	confirmPassword: {
		CONFIRM_PASSOWRD_IS_REQUIRED: '** Password confirmation is required',
		CONFIRM_PASSWORD_NOT_MATCH: '** Password does not match',
	},
	profile: {
		std: { STD_IS_REQUIRED: '** Standard is required' },
		div: { DIV_IS_REQUIRED: '** Division is required' },
		mobile: {
			MOBILE_IS_REQUIRED: '** Mobile No. is required',
			MOBILE_IS_INVALID: 'Mobile No. is invalid',
		},
	},
	email: {
		INVALID_EMAIL: 'Invalid Email ID. Please enter a valid Email ID',
		EMAIL_IS_REQUIRED: '** Email ID is required',
	},
};
