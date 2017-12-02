import React from 'react';
import PropTypes from 'prop-types';

export default class BlockRight extends React.Component {
    render () {
        return (
        <div class="block">
            <img class="block_icon block_icon_right" src="map.png"/>
            <h1>We'll show you how to get there!</h1>
        </div>
        )
    }
};

//Prop type definitions
BlockRight.propTypes = {
}

//Some defaults
BlockRight.defaultProps = {
}
