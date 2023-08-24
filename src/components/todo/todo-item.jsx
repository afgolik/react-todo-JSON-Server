import styles from './todo-item.module.css';
import {Input} from "../text-field/input";
import {Button} from "../button/button";

export const TodoItem = ({
	id,
	todo,
	completed,
	isUpdated,
	onChange,
	onClick,
	isDeleted,
	onClickChange,
 	editableElementId,
 	onBlur,
}) => {

	return (
		<div key={id} className={styles.item}>
			<div className={styles.container}>
				<div className={styles.content}>
					<form>
						<input
							onChange={() => onChange(id)}
							className={styles.checkbox}
							disabled={isUpdated}
							checked={completed}
							type='checkbox'
							id={id}
						/>
						<label htmlFor={id}></label>
					</form>
					<span
						className={
							completed ? `${styles.text} ${styles.done}` : styles.text
						}
					>
						{editableElementId === id ? <Input onBlur={(value) => onBlur(id, value)} initialValue={todo} /> : todo}
					</span>
				</div>
				<div className={styles.buttons}>
					<Button className={styles.change} onClick={() => onClickChange(id)} text='&#9998;' />
					<Button onClick={() => onClick(id)} disabled={isDeleted} text='Удалить' />
				</div>
			</div>
		</div>
	);
};
	