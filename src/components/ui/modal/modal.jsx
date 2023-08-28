import styles from './modal.module.css';
import { InputWithButton } from '../input/input-with-button';
import { Button } from '../button/button';

export const Modal = ({
	active,
	setActive,
						  initialValue,
						  onChange,
						  onClick,
	disabled,
}) => {
	const openModal = () => {
		setActive(true);
	};
	return (
		<div className={styles.modal}>
			<Button onClick={openModal} text='Создать новую задачу' />
			<div
				className={active ? `${styles.active} ${styles.window}` : styles.window}
				onClick={() => setActive(false)}
			>
				<div className={styles.body} onClick={(e) => e.stopPropagation()}>
					<InputWithButton
						initialValue={initialValue}
						onChange={onChange}
						onClick={onClick}
						disabled={disabled}
						placeholder='Создать новую задачу...'
						buttonText='Создать'
					/>
				</div>
			</div>
		</div>
	);
};
