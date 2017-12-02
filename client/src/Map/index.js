import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';


export default class Map extends Component {

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.loc}
        defaultZoom={5}
      >
      </GoogleMapReact>
    );
  }
}

//Prop type definitions
Map.propTypes = {
    loc: PropTypes.object    
}

//Some defaults
Map.defaultProps = {
    loc: {lat: 51.5114864, lng: -0.115997}
}
