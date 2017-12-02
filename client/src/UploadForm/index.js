import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class UploadForm extends React.Component {
    render () {
        return (
        <div>
<<<<<<< HEAD
            <form action="/imageUpload.js">
                <input type="file" name="pic" id = "img" accept="image/*"/>
=======
            <form className="header_upload_form_contrainer" action="/action_page.php">
                <input type="file" name="pic" accept="image/*"/>
>>>>>>> 9173de86fdb92c2784cc0a1a0aa8abb6c418b0d6
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
