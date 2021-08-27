import { useForm } from 'react-hook-form';
import InputField from 'components/InputField';
import { increment } from 'store/testSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';

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
				<button type="submit" onClick={() => dispatch(increment())}>
					Button
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
