import React from 'react';
import './NewTableRow.css'
import Button from "../button/Button";

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
        return (
            <div className="new-table-row">
                <input className="input-new-line" type="text" placeholder="Name" name="person" onChange={this.handleValueChange}/>
                <input className="input-new-line" type="number" placeholder="Amount" name="amount" onChange={this.handleValueChange}/>
                <input className="input-new-line" type="text" placeholder="Currency" name="currency" onChange={this.handleValueChange}/>
                <input className="input-new-line" type="date" placeholder="Date" name="date" onChange={this.handleValueChange}/>
                <input className="input-new-line" type="text" placeholder="Description" name="description" onChange={this.handleValueChange}/>
                <Button className="button-add" onClick={() => onAdd(this.state)}>Add</Button>
                <Button className="button-cancel" onClick={onCancel}>Cancel</Button>
            </div>
        )
    }
}

export default NewTableRow;