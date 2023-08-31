import styles from './input.module.css';
import { useState } from 'react';

export const Input = ({ type, initialValue, onChange, placeholder, onBlur }) => {
	const [value, setValue] = useState(initialValue || '');
	const handleOnChange = (e) => {
		setValue(e.target.value);
		if (onChange) {
			onChange(e.target.value);
		}
	};
	const handleOnBlur = () => {
		if (onBlur) {
			onBlur(value);
		}
	};
	return (
		<input
			className={styles.input}
			type={type}
			value={value}
			onChange={handleOnChange}
			placeholder={placeholder}
			onBlur={handleOnBlur}
			autoFocus
		/>
	);
};
