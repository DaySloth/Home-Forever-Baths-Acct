import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Wrapper from "./components/Wrapper/wrapper.js";


ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);