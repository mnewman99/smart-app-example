import React from 'react';
import ReactDOM from 'react-dom';
import FHIR from 'fhirclient';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

const smartLaunch = () => {
  // Authorize application
  FHIR.oauth2
    .init({
      clientId: '4e3a05cb-117c-46fa-8367-80dc137d65ea',
      scope: 'launch/patient openid profile'
    })
    .then(client => {
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

smartLaunch();