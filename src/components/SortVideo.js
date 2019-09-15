import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { sortVideo } from '../actions/operationAction'

class SortVideo extends Component {
    onClick = (e) => {
        e.preventDefault();
        console.log("onclick");
        this.props.sortVideo(this.props.items)
    }

    render() {
        if (this.props.items.length > 0) {
            return (
                <button onClick={this.onClick} className="sortbutton">Sort</button>
            )
        } else {
            return null;
        }
    }
}

SortVideo.protoTypes = {
    sortVideo: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    items: state.fetch.items
});

export default connect(mapStateToProps, { sortVideo })(SortVideo);