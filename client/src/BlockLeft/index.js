import React from 'react';
import PropTypes from 'prop-types';

export default class BlockLeft extends React.Component {
    render () {
        return (
        <div class="block">
            <img class="block_icon block_icon_left" src="upload.png"/>
            <h1 className="elegantshadow">Upload your image...</h1>
        </div>
        )
    }
};

//Prop type definitions
BlockLeft.propTypes = {
}

//Some defaults
BlockLeft.defaultProps = {
}
