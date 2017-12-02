import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Result from '../Result'; // ES6

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { hasResult: true  };
    
      }
    render () {
        if(this.state.hasResult)
            return <Result result={this.state.result}/>
        else
            return (
            <div>
                <form className="header_upload_form_contrainer" action="/imageUpload.js">
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
