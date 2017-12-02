import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch("/test")
    .then(function(response){ 
        return response.json();
    })
    .then(function(responseJson){
    console.log(responseJson);
    })
    .catch(function(err){
    console.error(err);
    });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

