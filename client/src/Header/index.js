import React from 'react';
import PropTypes from 'prop-types'; // ES6
import UploadForm from '../UploadForm'

export default class Header extends React.Component {
    render () {
        return (
        <div className="header">
            <img className="header_image" src={this.props.image}></img>
            <h1 className="header_title">{this.props.title}</h1>
            <UploadForm/>
        </div>
        )
    }
};

//Prop type definitions
Header.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
}

//Some defaults
Header.defaultProps = {
}
