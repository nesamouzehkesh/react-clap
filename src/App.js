import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';

class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        term: ''
    }

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="App">
                <h1 className="title">Article Search...</h1>
                <CardList data={this.state.data} />
            </div>
        )
    }

}

export default App;
