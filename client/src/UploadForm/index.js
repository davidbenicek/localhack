import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class UploadForm extends React.Component {
    render () {
        return (
        <div>
            <form action="/imageUpload.js">
                <input type="file" name="pic" id = "img" accept="image/*"/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
};

//Prop type definitions
UploadForm.propTypes = {
}

//Some defaults
UploadForm.defaultProps = {
}
