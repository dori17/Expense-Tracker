import React from 'react';
import './App.css';
import Header from "./components/header/Header";

let arr = [1,2,3];
for (let i = 0; i < 30; i++) {
    arr[i] = i + 1;
}

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
                {isAddNewLineClicked ? <NewTableRow/> : null}
                <div className="new-line">
                    <Button onClick={this.handleButtonClick}/>
                </div>
            </div>
        )
    }
}

export default App;
