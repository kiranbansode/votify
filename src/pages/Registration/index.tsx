import { useForm } from 'react-hook-form';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';

const Registration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
					inputLabel="Surname"
					inputError={errors}
					register={register('name.sur')}
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

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Registration;
