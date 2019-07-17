import React from 'react';
import './App.css';
import Header from "./components/header/Header";

let arr = [1,2,3];
for (let i = 0; i < 30; i++) {
    arr[i] = i + 1;
}

function App() {
    return (
        <div className="App">
            <Header>Expense Tracker</Header>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                {
                    arr.map(el => (
                            <tr>
                                <th scope="row">{el}</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        ))
                }

                </tbody>
            </table>
            <div className="new-line">
                <Button/>
            </div>
        </div>
    );
}

export default App;
