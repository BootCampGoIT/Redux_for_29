import React from 'react'

const Filter = ({filter, getFilterValue }) => {
    return (
        <>
        <input type="text" value={filter} onChange={(e)=> getFilterValue(e.target.value)} />
        </>
        
    );
}

export default Filter;