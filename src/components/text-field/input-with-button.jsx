import styles from './input-with-button.module.css';
import { Input } from './input';
import {Button} from "../button/button";

export const InputWithButton = ({ addInputValue, setAddInputValue, placeholder }) => {
	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<Input
				type='text'
				initialValue={addInputValue}
				onChange={setAddInputValue}
				placeholder={placeholder}
			/>
			<Button text='Найти' />
		</form>
	);
};
