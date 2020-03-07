// Importing React from the 'react' package is required for all components.
import React from 'react';

// A class component may contain state:
// The render() method is required for anything to be rendered on screen.
// JSX is used instead of standard html.
// 'className' is JSX for 'class' in HTML because 'class' is a reserved keyword in HTML.
// JSX uses the React.createElement('element_tag', props, 'innerHTML') to create the dom element. 
// React.createElement('h1', null, 'Hello World!') is the equivalent of below.

class App extends React.Component {
	render() {
		return <h1 className="">Hello World!</h1>
		// Testing the longhand:
		// return React.createElement('h1', null, 'Hello World!');
	}
}

// A stateless component only returns the return block and has not state.
// Example:
// const App = () => <h1>Hello stateless</h1>

export default App


// // Scaffolded code below:
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 				Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 				className="App-link"
// 				href="https://reactjs.org"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				>
// 				Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
