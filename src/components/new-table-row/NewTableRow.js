import React from 'react';
import './NewTableRow.css'
import Button from "../button/Button";
import {Currency} from "../../App";

class NewTableRow extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleValueChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {onAdd, onCancel} = this.props;
        let selectOptions = [];
        for(const currency of Object.values(Currency)) {
            selectOptions.push(<option key={currency} value={currency}>{currency}</option>)
        }

        return (
            <div className="new-table-row">
                <input className="input-new-line" type="text" placeholder="Name" name="person" onChange={this.handleValueChange}/>
                <input className="input-new-line" type="number" placeholder="Amount" name="amount" onChange={this.handleValueChange}/>
                <select name="currency" onChange={this.handleValueChange}>
                    {selectOptions}
                </select>
                <input className="input-new-line" type="date" placeholder="Date" name="date" onChange={this.handleValueChange}/>
                <input className="input-new-line" type="text" placeholder="Description" name="description" onChange={this.handleValueChange}/>
                <div className="flex-row">
                <Button className="button-add" onClick={() => onAdd(this.state)}>Add</Button>
                <Button className="button-cancel" onClick={onCancel}>Cancel</Button>
                </div>
            </div>
        )
    }
}

export default NewTableRow;