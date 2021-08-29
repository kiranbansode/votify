import { useForm, FieldValues } from 'react-hook-form';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import SelectInputField from 'components/Select';
import { standardsOpt } from 'utils/options';

const registrationFormDefaultValues = {
	name: {
		first: '',
		middle: '',
		last: '',
	},
	password: '',
	confirmPassword: '',
	standard: '_noSelect',
};

const Registration = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: registrationFormDefaultValues,
	});

	return (
		<div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<TextInputField
					inputLabel="Firstname"
					inputError={errors}
					register={register('name.first')}
				/>

				<TextInputField
					inputLabel="Middlename"
					inputError={errors}
					register={register('name.middle')}
				/>

				<TextInputField
					inputLabel="Lastname"
					inputError={errors}
					register={register('name.last')}
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
					control={control}
					inputError={errors}
					inputLabel="Standard"
					options={standardsOpt}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Registration;
