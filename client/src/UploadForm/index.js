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
                        files: []  };
    
      }

      getBase64Image(img) {
        const reader = new FileReader();
        reader.onload = (event) => {
          console.log(event.target.result);
        };
        var x = reader.readAsDataURL(img);
        console.log(x)
        return x;
      }
      
      processFile(file){
        console.log("yooo",file);
        var base64 = this.getBase64Image(file);
        console.log(base64);
        var xhr = new XMLHttpRequest();
        var url = "/image";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        var data = JSON.stringify({"name":"test","data": base64 });
        xhr.send(data);
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
            return <Result result={this.state.result}/>
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