import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class MyWhistlist extends Component {
    render() {
        var item = this.props.myWhistlist.map(item => (
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
            <React.Fragment>
                <div className="oneresult">
                    {item}
                </div>
            </React.Fragment>
        )
    }
}

MyWhistlist.protoTypes = {
    myWhistlist: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    myWhistlist: state.fetch.myWhistlist
});

export default connect(mapStateToProps)(MyWhistlist);