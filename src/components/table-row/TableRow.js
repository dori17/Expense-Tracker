import React from 'react';
import './TableRow.css'

const TableRow = ({person, amount, currency, date, description, onCheck}) => {
    return (
        <tr>
            <th scope="row">{person}</th>
            <td>{amount}</td>
            <td>{currency}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td><input type="checkbox" value="blah-blah" onChange={() => onCheck(person)}/></td>
        </tr>
    )
};

export default TableRow;