import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Dropzone from 'react-dropzone';
import Result from '../Result'; // ES6

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.getBase64Image = this.getBase64Image.bind(this);
        this.processFile = this.processFile.bind(this);
        
        this.state = { hasResult:false, 
                        result: {},
                        loading: false,
                        files: []  };
    
      }

      getBase64Image(img) {
        const reader = new FileReader();
        reader.onload = (event) => {
          fetch('/image', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'val',
              image: event.target.result
            })
          }).then(response => response.json())
          .then(responseJson => {
            this.procesResponse(responseJson);
        })
          .catch(error => {
            console.error(error);
          });
        };
        reader.readAsDataURL(img);
      }
      
      processFile(file){
        console.log("yooo",file);
        var base64 = this.getBase64Image(file);
      }
      
      procesResponse(info){
        this.setState({result : info});        
        this.setState({hasResult: true});
      }

    onDrop(objs) {
        this.processFile(objs[0]);
        this.setState({files: objs });
        this.setState({loading: true})
    }

    render () {
        if(this.state.hasResult)
            return <Result info={this.state.result}/>
        else
            if(this.state.loading)
            return (<section className="header_upload_form_contrainer">
                        <img className="header_uploade_spinner" src="spinner.gif"/>
                    </section>
                    )
            else
            return (
                <section className="header_upload_form_contrainer">
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                    <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </div>
                </section>
            )
    }
};

//Prop type definitions
UploadForm.propTypes = {
}

//Some defaults
UploadForm.defaultProps = {
}