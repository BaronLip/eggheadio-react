// Importing React from the 'react' package is required for all components.
import React from 'react';
import PropTypes from 'prop-types'

// A class component may contain state:
// The render() method is required for anything to be rendered on screen.
// JSX is used instead of standard html.
// 'className' is JSX for 'class' in HTML because 'class' is a reserved keyword in HTML.
// JSX uses the React.createElement('element_tag', props, 'innerHTML') to create the dom element. 
// React.createElement('h1', null, 'Hello World!') is the equivalent of below.

class App extends React.Component {
	render() {
		// React components can only return one 'node'.
		// To compensate for this, wrap multiple nodes in a parent node.
		// JavaScript must be placed before the return statement, or be interpolated within the return statement.
		//  
		let txt = this.props.txt;
		let cat = this.props.cat;
		return (
			<div>
				<h1 className="">Hello World!</h1>
				{/* return React.createElement('h1', null, 'Hello World!'); */}
				{/* NOTE: JSX comments must be wrapped in braces. */}

				{/* Import props by using 'this.props.propName'. */}
				<h1>{this.props.txt}</h1>
				{/* Or, set the prop to a variable outside of the render method. */}
				<h1>{txt}</h1>
				<h1>{cat}</h1>

				{/* Testing the longhand:*/}
			</div>
		)
	}
}

// Another way to add properties to a component is using a 'propTypes' object.
// NOTE: propTypes is paired with React.PropTypes, with capital "P".
// The key is the property name and the value is the 'type' of the value prefaced with React.propTypes.
// propTypes is used to verify the datatype of the prop is a valid entry.
// .isRequired, will throw a warning in the console if the prop is not available. The all will continue to work though.
// NOTE: PropTypes now needs to be imported first before using. The video is a little out of date. 
App.propTypes = {
	txt: PropTypes.string,
	cat: PropTypes.number.isRequired
}

// Set default props by using .defaultProps.
App.defaultProps = {
	txt: "this is the default txt.",
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
