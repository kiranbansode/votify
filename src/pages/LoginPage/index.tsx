import { useForm } from 'react-hook-form';
import InputField from 'components/InputField';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<InputField
					inputLabel="First name"
					register={register('firstname')}
					inputError={errors}
				/>

				<InputField
					inputLabel="Last Name"
					register={register('lastname')}
					inputError={errors}
				/>

				<button type="submit">Button</button>
			</form>
		</div>
	);
};

export default LoginPage;
