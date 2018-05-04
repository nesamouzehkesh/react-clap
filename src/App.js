import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

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
                <Header title="Article Search:" />
                <CardList data={this.state.data} />
            </div>
        )
    }

}

export default App;
