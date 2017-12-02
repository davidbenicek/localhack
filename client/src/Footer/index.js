import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
    render () {
        return (
        <div class="block">
            <img class ="img" src="GitHub.png"/>
            <img class ="img" src="nodejs.png"/>
            <img class ="img" src="javascriptimg.png"/>
            <img class ="img" src="react.png"/>
        </div>
        )
    }
};

//Prop type definitions
Footer.propTypes = {
}

//Some defaults
Footer.defaultProps = {
}
