import React from 'react';
import PropTypes from 'prop-types';

export default class Result extends React.Component {
    
    render () {
        return (
        <div className='result_container'>
            <img className="result_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1200px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"/>
            <h2>We have detected {this.props.info.name}</h2>
            <div>
                map
            </div>
        </div>
        )
    }
};

//Prop type definitions
Result.propTypes = {
    info: PropTypes.object    
}

//Some defaults
Result.defaultProps = {
}
