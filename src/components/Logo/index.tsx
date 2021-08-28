import './Logo.styles.scss';

interface LogoProps {
	size?: 'big';
}

const Logo = ({ size }: LogoProps) => (
	<div className={size ? `logo ${size}` : 'logo'}>
		<img src="/src/assets/img/logo_large-minified.png" alt="Votify Logo" />
	</div>
);

export default Logo;
