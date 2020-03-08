import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// // Scaffolded imports below:
// import './index.css';
// import * as serviceWorker from './serviceWorker';

{/*
The 'text' attribute within the App tag below is a prop.
Although this is index.js file, App is hard coded the "prop"erties of 'txt and 'cat'.
In the App.js file, the props are then utilized statically.
PROPS: ARE NOT MEANT TO BE MANIPULATED WITHIN A COMPONENT.
STATE: ARE VALUES THAT ARE MEANT TO BE MANAGED AND UPDATED BY THE COMPONENT.
*/}

ReactDOM.render(
    <App txt="this is the prop 'txt'" cat={5} />,
    document.getElementById('root')
);

