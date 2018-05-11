import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import CardDetails from './components/CardDetails/CardDetails';
import AddEditArticle from './components/AddEditArticle/AddEditArticle';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: '',
            showAddForm: false,
            currentArticle: {},
            toggle: false, // toggle is true for any view other than the main list/page
            changeOnEdit: false
        }
    }


    changeHandler = (searchTerm) => {
        this.setState({
            term: searchTerm
        });
    }

    renderArticle = (articleId) => {
        const selected = this.state.data.filter(article => article.id === articleId);
        const theArticle = selected[0];
        this.setState({
            currentArticle: theArticle,
            toggle: true
        })
    }

    renderMainList = () => {
        /** basically: which `Back` did you click on? The `Back` in form page or the `Back` in details page? */
        if (!this.state.showAddForm) { //means you hit `Back` in details page
            this.setState({
                toggle: false,
                currentArticle: {}
            })
        } else {
            this.setState({
                showAddForm: false,
                toggle: false,
                changeOnEdit: false // becasue if you have made changes you would have clicked on `Save`
            })

        }
    }

    addHandler = () => {
        this.setState({
            showAddForm: true,
        })
    }

    editHandler = (currentArticle) => {
        this.setState({
            showAddForm: true,
        })
    }

    saveHandler = (id, name, summary, url) => {
        const { data, currentArticle } = this.state;

        const editedArticle = Object.assign({}, currentArticle,
            {
                id: id,
                name: name,
                summary: summary,
                url: url
            });
        const newDataArray = data.map(article => article === currentArticle ? editedArticle : article);
        this.setState({
            data: newDataArray,
            showAddForm: false,
            toggle: true,
            currentArticle: editedArticle,
            changeOnEdit: true // because clicking on `Save` means you made changes 
        });
    }

    createHandler = () => { }

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setStateFromCurrentArticle(nextProps.currentArticle);
    }

    render() {
        return (
            <div className="App">
                <Header
                    data={this.state.data}
                    changeHandler={this.changeHandler}
                    addHandler={this.addHandler}
                    showAddForm={this.state.showAddForm}
                    currentArticle={this.state.currentArticle}
                    editHandler={this.editHandler}
                    toggle={this.state.toggle}
                />

                <div>
                    {(Object.keys(this.state.currentArticle).length !== 0 && this.state.toggle) ?
                        this.state.showAddForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                                currentArticle={this.state.currentArticle}
                                saveHandler={this.saveHandler}
                            /> :
                            <CardDetails
                                currentArticle={this.state.currentArticle}
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                            />
                        :
                        this.state.showAddForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                                currentArticle={this.state.currentArticle}
                                createHandler={this.createHandler}
                            /> :
                            <CardList
                                data={this.state.data}
                                term={this.state.term}
                                renderArticle={this.renderArticle}
                            />
                    }
                </div>

            </div>
        )

    }

}

export default App;
