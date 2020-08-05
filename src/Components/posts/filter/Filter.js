import React from 'react'
import css from './Filter.module.css'

const Filter = ({filter, getFilterValue }) => {
    return (
        <div className={css.filter}>
        <input className={css.filterInput} type="text" value={filter} onChange={(e)=> getFilterValue(e.target.value)} />
        </div>
    );
}

export default Filter;