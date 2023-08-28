import styles from './button.module.css';

export const Button = ({ disabled, onClick, text, className }) => {
	const handleOnClick = () => {
		if (onClick) {
			onClick();
		}
	};
	return (
		<button
			type={'submit'}
			className={`${styles.button} ${className}`}
			disabled={disabled}
			onClick={handleOnClick}
		>
			<span>{text}</span>
		</button>
	);
};
