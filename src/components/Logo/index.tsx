import './Logo.styles.scss';

interface LogoProps {
	size?: 'big';
}

const Logo = ({ size }: LogoProps) => (
	<div className={size ? `logo ${size}` : 'logo'}>
		<img alt="Votify Logo" src="/src/assets/img/logo_large-minified.png" />
	</div>
);

export default Logo;
