import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { searchAction } from '../actions/operationAction';

class SearchOperation extends Component {
    state = {
        search: ''
    }

    onChange = (e) => this.setState(
        { [e.target.name]: e.target.value },
        console.log(this.state.search)
    );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchAction(this.state.search);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="search" placeholder="search video ..." onChange={this.onChange} />
                <input type="submit" value="submit" className="btn" />
            </form>
        )
    }
}

SearchOperation.protoTypes = {
    searchAction: PropTypes.func.isRequired
}

export default connect(null, { searchAction })(SearchOperation);