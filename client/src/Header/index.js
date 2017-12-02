import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class Header extends React.Component {
    render () {
        return (
        <div>
            <img className="headerImage" src={this.props.image}></img>
            <h1 className="headerTitle">{this.props.title}</h1>
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
