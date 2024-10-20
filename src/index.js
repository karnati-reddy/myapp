import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
// import App from './HealhCareDomainLex/App';
import App from './BonStayLex/App'
import { Provider } from 'react-redux';
import store from './BonStayLex/Themes/store';
// import App from './CarCareApplication/App';
// import App from './Charts/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter><App /></BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
