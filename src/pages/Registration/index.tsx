import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import Button from 'components/Button';
import SelectInputField from 'components/Select';
import DateInputField from 'components/DatePicker';
import validations from 'utils/validations';
import { divisionOpt, genderOpt, standardsOpt } from 'utils/options';

const RegistrationFormValidation = yup.object().shape({
	name: yup.object().shape({
		firstname: validations.firstName,
		middlename: validations.middleName,
		lastname: validations.lastName,
	}),
	schoolName: validations.schoolName,
	gender: validations.gender,
	dob: validations.dob,
	std: validations.std,
	div: validations.div,
	rollNo: validations.rollNo,
	mobileNo: validations.mobileNo,
	email: validations.email,
	password: validations.password,
	confirmPassword: validations.confirmPassword,
});

const registrationFormDefaultValues = {
	name: {
		firstname: '',
		middlename: '',
		lastname: '',
	},
	gender: '',
	dob: null,
	schoolName: '',
	std: '',
	div: '',
	rollNo: '',
	mobileNo: '',
	email: '',
	password: '',
	confirmPassword: '',
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

				<SelectInputField
					control={control}
					fieldName="gender"
					inputErrors={errors}
					inputLabel="Gender"
					options={genderOpt}
				/>

				<DateInputField
					control={control}
					fieldName="dob"
					inputErrors={errors}
					inputLabel="Date of Birth"
				/>

				<TextInputField
					inputError={errors}
					inputLabel="School Name"
					register={register('schoolName')}
				/>

				<SelectInputField
					control={control}
					fieldName="std"
					inputErrors={errors}
					inputLabel="Standard"
					options={standardsOpt}
				/>

				<SelectInputField
					control={control}
					fieldName="div"
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

				<Button color="warning" type="reset">
					Reset
				</Button>
			</form>
		</div>
	);
};

export default Registration;
