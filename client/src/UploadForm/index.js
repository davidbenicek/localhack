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
                        files: []  };
    
      }

      getBase64Image(img) {
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log("111");
          console.log(event.target.result);
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
        console.log("2222");
      }
      
      processFile(file){
        console.log("yooo",file);
        var base64 = this.getBase64Image(file);
        console.log("333",base64);
      }
      
      procesResponse(info){
        this.setState({result : info});        
        this.setState({hasResult: true});
      }

    onDrop(files) {
        console.log(files);
        this.processFile(files[0]);
    this.setState({
        files
    });
    }

    render () {
        if(this.state.hasResult)
            return <Result info={this.state.result}/>
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