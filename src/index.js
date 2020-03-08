import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// // Scaffolded imports below:
// import './index.css';
// import * as serviceWorker from './serviceWorker';

{/*The 'text' attribute within the App tag below is a prop.
Although this is index.js file, App is hard coded the "prop"erties of 'txt and 'cat'.
In the App.js file, */}
ReactDOM.render(
    <App txt="this is the prop 'txt'" cat={5} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
