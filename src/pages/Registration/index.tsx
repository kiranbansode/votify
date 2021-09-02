import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import Button from 'components/Button';
import SelectInputField from 'components/Select';
import DateInputField from 'components/DatePicker';
import { divisionOpt, genderOpt, standardsOpt } from 'utils/options';

const RegistrationFormValidation = yup.object().shape({
	name: yup.object().shape({
		firstname: yup.string().strict().trim().required(),
		middlename: yup.string().strict().trim().required(),
		lastname: yup.string().strict().trim().required(),
	}),
	gender: yup.string().strict().trim().required(),
	password: yup.string().strict().trim().required(),
	confirmPassword: yup.string().strict().trim().required(),
	standard: yup
		.string()
		.strict()
		.trim()
		.test('is_noSelect', 'Select Your Standard', (value) => value !== '_noSelect')
		.required(),
	division: yup
		.string()
		.strict()
		.trim()
		.test('is_noSelect', 'Select Your Division', (value) => value !== '_noSelect')
		.required(),
});

const registrationFormDefaultValues = {
	name: {
		firstname: '',
		middlename: '',
		lastname: '',
	},
	gender: '',
	password: '',
	confirmPassword: '',
	standard: '',
	division: '',
	dob: null,
};

const Registration = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: registrationFormDefaultValues,
		resolver: yupResolver(RegistrationFormValidation),
	});

	return (
		<div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<TextInputField
					inputError={errors}
					inputLabel="Firstname"
					register={register('name.firstname')}
				/>

				<TextInputField
					inputError={errors}
					inputLabel="Middlename"
					register={register('name.middlename')}
				/>

				<TextInputField
					inputError={errors}
					inputLabel="Lastname"
					register={register('name.lastname')}
				/>

				<DateInputField
					control={control}
					fieldName="dob"
					inputErrors={errors}
					inputLabel="Date of Birth"
				/>

				<SelectInputField
					control={control}
					fieldName="gender"
					inputErrors={errors}
					inputLabel="Gender"
					options={genderOpt}
				/>

				<TextInputField
					inputError={errors}
					inputLabel="School Name"
					register={register('schoolName')}
				/>

				<SelectInputField
					control={control}
					fieldName="standard"
					inputErrors={errors}
					inputLabel="Standard"
					options={standardsOpt}
				/>

				<SelectInputField
					control={control}
					fieldName="division"
					inputErrors={errors}
					inputLabel="Division"
					options={divisionOpt}
				/>

				<TextInputField
					inputError={errors}
					inputLabel="Roll No."
					register={register('rollNo')}
				/>

				<TextInputField
					inputError={errors}
					inputLabel="Mobile No."
					register={register('mobileNo')}
				/>

				<TextInputField
					inputError={errors}
					inputLabel="Email ID"
					register={register('email')}
				/>

				<PasswordInputField
					inputError={errors}
					inputLabel="Password"
					register={register('password')}
				/>

				<PasswordInputField
					inputError={errors}
					inputLabel="Confirm Password"
					register={register('confirmPassword')}
				/>

				<Button color="primary" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Registration;
