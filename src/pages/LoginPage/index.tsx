import { useForm } from 'react-hook-form';
import { increment } from 'store/testSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useAppDispatch();
	return (
		<div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<TextInputField
					inputLabel="First name"
					register={register('firstname')}
					inputError={errors}
				/>

				<PasswordInputField
					inputLabel="Password"
					register={register('password')}
					inputError={errors}
				/>
				<button type="submit" onClick={() => dispatch(increment())}>
					Button
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
