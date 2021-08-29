import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import SelectInputField from 'components/Select';
import { divisionOpt, standardsOpt } from 'utils/options';

const RegistrationFormValidation = yup.object().shape({
	name: yup.object().shape({
		firstname: yup.string().strict().trim().required(),
	}),
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
	password: '',
	confirmPassword: '',
	standard: '_noSelect',
	division: '_noSelect',
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
					inputLabel="Firstname"
					inputError={errors}
					register={register('name.firstname')}
				/>

				<TextInputField
					inputLabel="Middlename"
					inputError={errors}
					register={register('name.middlename')}
				/>

				<TextInputField
					inputLabel="Lastname"
					inputError={errors}
					register={register('name.lastname')}
				/>

				<PasswordInputField
					inputLabel="Password"
					inputError={errors}
					register={register('password')}
				/>

				<PasswordInputField
					inputLabel="Confirm Password"
					inputError={errors}
					register={register('confirmPassword')}
				/>

				<SelectInputField
					inputErrors={errors}
					control={control}
					inputLabel="Standard"
					selectFieldName="standard"
					options={standardsOpt}
				/>

				<SelectInputField
					inputErrors={errors}
					control={control}
					inputLabel="Division"
					selectFieldName="division"
					options={divisionOpt}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Registration;
