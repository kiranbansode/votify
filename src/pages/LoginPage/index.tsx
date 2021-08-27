import { useForm } from 'react-hook-form';
import { increment } from 'store/testSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import LoadingButton from '@material-ui/lab/LoadingButton';

import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import Button from 'components/Button';

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
					inputLabel="Email ID"
					register={register('email')}
					inputError={errors}
				/>

				<PasswordInputField
					inputLabel="Password"
					register={register('password')}
					inputError={errors}
				/>

				<LoadingButton fullWidth loading size="large" color="error" variant="contained">
					Login
				</LoadingButton>

				<div className="or">OR</div>

				<Button color="primary" onClick={() => dispatch(increment())}>
					Register
				</Button>
			</form>
		</div>
	);
};

export default LoginPage;
