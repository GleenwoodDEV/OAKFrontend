import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
    return (
        <div className={styles.checkbox_wrapper}> 
            <label className={styles.label} htmlFor={styles.input}>
                <input
                    type='checkbox'
                    id={props.id}
                    className={styles.input}
                    onChange={(e) => props.onChange(e.target.value, e)}
                    value={props.value}
                />
            </label>
            <div className={styles.labeldiv}>{props.labelName}</div>
        </div>
    );
};

export default CheckBox;
