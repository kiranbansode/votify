import { useForm } from 'react-hook-form';
import { increment } from 'store/testSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import LoadingButton from '@material-ui/lab/LoadingButton';

import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import Button from 'components/Button';
import InputWrapper from 'styled/InputWrapper';

import './LoginPage.styles.scss';

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useAppDispatch();
	return (
		<div className="loginpage">
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
				<InputWrapper>
					<LoadingButton fullWidth size="large" color="error" variant="contained">
						Login
					</LoadingButton>
				</InputWrapper>
				<InputWrapper id="or">OR</InputWrapper>

				<Button color="primary" onClick={() => dispatch(increment())}>
					Register
				</Button>
			</form>
		</div>
	);
};

export default LoginPage;
