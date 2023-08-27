import styles from './search.module.css'
import {InputWithButton} from "../text-field/input-with-button";
import React from "react";

export const Search = ({onClick}) => {


    return (
        <div className={styles.search}>
            <InputWithButton
                onClick={onClick}
                placeholder='Найти задачу...'
                buttonText='Найти'
            />
        </div>
    )
};
