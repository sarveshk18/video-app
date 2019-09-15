import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addToWhistList } from '../actions/operationAction'

class Video extends Component {

    onClick = (e) => {
        e.preventDefault();
        var item = this.props.items.filter((item) => item.id.videoId === e.target.id);
        console.log(item);
        this.props.addToWhistList(item)
    }

    render() {
        console.log("video items: ");
        console.log(this.props.items);
        var item = this.props.items.map(item => (
            <div key={item.id.videoId}>
                <div className="col" align="left">
                    <iframe width="70%" height="200" src={"https://www.youtube.com/embed/" + item.id.videoId}>
                    </iframe>
                </div>
                <div align="left" className="col">
                    <div className="content">
                        <p className="title">{item.snippet.title}</p>
                        <button item={item} id={item.id.videoId} onClick={this.onClick} className="whistlistbutton">Add To Whistlist</button>
                        <p >{item.snippet.publishedAt}</p>
                        <div className="discription">
                            <p>{item.snippet.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="oneresult">
                {item}
            </div>
        );
    }
}

Video.propTypes = {
    items: PropTypes.array.isRequired,
    addToWhistList: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    items: state.fetch.items
});

export default connect(mapStateToProps, { addToWhistList })(Video);