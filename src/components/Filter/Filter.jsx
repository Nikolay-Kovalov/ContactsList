import React from "react";
import styles from "./Filter.module.css"

class Filter extends React.Component{

    render() {
        const { onFilter } = this.props;
        return (
            <label className={styles.label}> <span>Find contacts by name</span>
                <input onChange={(evt) => { onFilter(evt.target.value) }} className={styles.input} type="text" name="filter"/>
            </label>
        )
    }
}

export default Filter;