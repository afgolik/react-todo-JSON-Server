import styles from './search.module.css';
import { InputWithButton } from '../input/input-with-button';
import React, {useEffect} from 'react';
import {Button} from "../button/button";

export const Search = ({ onClick, isSearched, onReset }) => {
	return (
		<div className={styles.search}>
			<InputWithButton
				onClick={onClick}
				placeholder='Найти задачу...'
				buttonText='Найти'
				buttonType='submit'
			/>
			{isSearched ? <Button buttonType='button' className={styles.button} text='&#10006;' onClick={onReset} /> : null}
		</div>
	);
};
