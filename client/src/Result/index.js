import React from 'react';
import PropTypes from 'prop-types';
import Map from '../Map';

export default class Result extends React.Component {
    
    render () {
        return (
        <div className='result_container'>
            <img className="result_image" src={this.props.info.otherImages[0].url}/>
            <h2 className="result_text" >We have detected {this.props.info.name}</h2>
            <div id="map">
                <Map loc={this.props.info.location}/>
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
