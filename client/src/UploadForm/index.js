import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class UploadForm extends React.Component {
    render () {
        return (
        <div>
            <form className="header_upload_form_contrainer" action="/action_page.php">
                <input type="file" name="pic" accept="image/*"/>
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
