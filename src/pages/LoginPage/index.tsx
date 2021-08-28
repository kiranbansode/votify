import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { increment } from 'store/testSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { validateEmailID, validatePassword } from 'utils/validations';
import TextInputField from 'components/TextInputField';
import PasswordInputField from 'components/PasswordInputField';
import Button from 'components/Button';
import InputWrapper from 'styled/InputWrapper';

import './LoginPage.styles.scss';

export const loginPageFormValidation = yup.object().shape({
	email: validateEmailID,
	password: validatePassword,
});

export const defaultLoginPageData = {
	email: '',
	password: '',
};

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: defaultLoginPageData,
		resolver: yupResolver(loginPageFormValidation),
	});

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
					<LoadingButton
						fullWidth
						type="submit"
						size="large"
						color="error"
						variant="contained"
					>
						Login
					</LoadingButton>
				</InputWrapper>

				<p id="or">OR</p>

				<Button color="primary" onClick={() => dispatch(increment())}>
					Register
				</Button>
			</form>
		</div>
	);
};

export default LoginPage;
