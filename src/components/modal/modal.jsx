import styles from './modal.module.css';
import { InputWithButton } from '../text-field/input-with-button';
import { Button } from '../button/button';

export const Modal = ({
	active,
	setActive,
	addInputValue,
	setAddInputValue,
	onCreate,
	isCreated,
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
						addInputValue={addInputValue}
						setAddInputValue={setAddInputValue}
						onCreate={onCreate}
						isCreated={isCreated}
						placeholder='Создать новую задачу...'
					/>
				</div>
			</div>
		</div>
	);
};
