import styles from './input-with-button.module.css';
import { Input } from './input';
import { Button } from '../button/button';

export const InputWithButton = ({
	setAddInputValue,
	placeholder,
	buttonText,
	onCreate,
	isCreated,
	onBlur,
	initialValue,
}) => {
	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<Input
				type='text'
				initialValue={initialValue}
				onChange={setAddInputValue}
				placeholder={placeholder}
				onBlur={onBlur}
			/>
			<Button text={buttonText} onClick={onCreate} disabled={isCreated} />
		</form>
	);
};
