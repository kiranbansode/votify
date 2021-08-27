/*
	Author : Kiran Ashok Bansode
	Note : In VSCode color preview which apper in front of color name, Color will look different than material-ui theme pallet
*/

import { Button as MaterialUIButton } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { purple, pink } from '@material-ui/core/colors';

interface ButtonProps {
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	children?: any;
	onClick?: () => void;
	type?: 'submit' | 'button' | 'reset';
	variant?: 'contained' | 'outlined' | 'text';
}

const Button = ({ color, variant, children, onClick, type, ...buttonProps }: ButtonProps) => (
	<MaterialUIButton
		fullWidth
		variant={variant || 'contained'}
		type={type || 'button'}
		color={color || 'inherit'}
		size="large"
		onClick={onClick}
		{...buttonProps}
	>
		{children || 'Button'}
	</MaterialUIButton>
);

export default Button;

/*
	🛑 For custom color button like below, changing variant prop will not work. 🛑
*/

export const PurpleButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	'&:hover': {
		backgroundColor: purple[700],
	},
}));

export const PinkButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(pink[500]),
	backgroundColor: pink[500],
	'&:hover': {
		backgroundColor: pink[700],
	},
}));
