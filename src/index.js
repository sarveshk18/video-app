import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import SearchOperation from './components/SearchOperation'
import Video from './components/Video'
import MyWhistlist from './MyWhistlist';
import store from './store'
import './index.css';
import SortVideo from './components/SortVideo';

class App extends Component {
    // searchText = (searchText) => {
    //     this.setState()
    // }
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-content">
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <a href="/mywhistlist">mywhistlist</a>
                                <SearchOperation />
                                <SortVideo />
                                <Video />
                            </React.Fragment>
                        )} />
                        <Route path="/mywhistlist" component={MyWhistlist} />
                    </div>
                    <div className="app-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </Router>
        );
    }
}

// ========================================

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
