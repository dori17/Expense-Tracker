import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import TableRow from "./components/table-row/TableRow";
import Button from "./components/button/Button";
import NewTableRow from "./components/new-table-row/NewTableRow";

export const Currency = {
    usd: 'USD',
    byn: 'BYN',
    eur: 'EUR',
    rub: 'RUB'
};

const arr = [
    {
        person: 'Kate',
        amount: 200,
        currency: Currency.usd,
        date: '12-Jul-2019',
        description: 'food'
    },
    {
        person: 'Vlad',
        amount: 100,
        currency: Currency.usd,
        date: '12-Jul-2019',
        description: 'drinks'
    },
    {
        person: 'Ksenya',
        amount: 50,
        currency: Currency.usd,
        date: '12-Jul-2019',
        description: 'items for home'
    }
];

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          isAddNewLineClicked: false
        };
    }

    handleButtonClick = () => {
        this.setState({isAddNewLineClicked: true})
    };

    handleCancel = () => {
        this.setState({isAddNewLineClicked: false})
    };

    addNewLine = (values) => {
        console.log(values);
        arr.push(values);
        this.setState({isAddNewLineClicked: false});
    };

    render() {
        const {isAddNewLineClicked} = this.state;
        return (
            <div className="App">
                <Header>Expense Tracker</Header>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Person</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        arr.map(el => (<TableRow {...el}/>))
                    }

                    </tbody>
                </table>
                {isAddNewLineClicked ? <NewTableRow onAdd={this.addNewLine} onCancel={this.handleCancel}/> : null}
                <div className="new-line">
                    <Button onClick={this.handleButtonClick} icon="fa fa-plus" className="button-add">Add new line</Button>
                </div>
            </div>
        )
    }
}

export default App;
