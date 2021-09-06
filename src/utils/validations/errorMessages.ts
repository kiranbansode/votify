export const errorMessages = {
	yup: {
		TRIM: 'Blank Space is not allowed',
	},
	name: {
		firstname: {
			IS_REQUIRED: '** Firstname is required',
		},
		middlename: {
			IS_REQUIRED: '** Middlename is required',
		},
		lastname: {
			IS_REQUIRED: '** Lastname is required',
		},
	},
	password: {
		IS_REQUIRED: '** Password is required',
		SHOULD_MATCH:
			'Must be min 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character',
	},
	confirmPassword: {
		IS_REQUIRED: '** Password confirmation is required',
		CONFIRM_PASSWORD_NOT_MATCH: '** Password does not match',
	},
	profile: {
		std: { IS_REQUIRED: '** Standard is required' },
		div: { IS_REQUIRED: '** Division is required' },
		mobile: {
			IS_REQUIRED: '** Mobile No. is required',
			IS_INVALID: 'Mobile No. is invalid',
		},
		gender: {
			IS_REQUIRED: '** Gender is required',
		},
		schoolName: {
			IS_REQUIRED: '** School Name is required',
		},
	},
	email: {
		INVALID_EMAIL: 'Invalid Email ID. Please enter a valid Email ID',
		IS_REQUIRED: '** Email ID is required',
	},
};
