import React from 'react';
import './NewTableRow.css'

const NewTableRow = () => {
    return (
        <div className="new-table-row">
            <input className="input-new-line" type="text" placeholder="Name"/>
            <input className="input-new-line" type="number" placeholder="Amount"/>
            <input className="input-new-line" type="text" placeholder="Currency"/>
            <input className="input-new-line" type="date" placeholder="Date"/>
            <input className="input-new-line" type="text" placeholder="Description"/>
        </div>
    )
};

export default NewTableRow;