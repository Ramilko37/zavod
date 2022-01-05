import React from "react";
import styles from './styles.module.scss';

const RadioButton = (props) => {
    return (
        <div className={styles.RadioButton}>
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;
