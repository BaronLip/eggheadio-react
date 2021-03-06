// Importing React from the 'react' package is required for all components.
import React from 'react';
import PropTypes from 'prop-types';
import InputWidget from "../src/components/input";
import Button, { Heart } from "../src/components/button";
import AddButton from "../src/components/add_button";

// A class component may contain state:
// The render() method is required for anything to be rendered on screen.
// JSX is used instead of standard html.
// 'className' is JSX for 'class' in HTML because 'class' is a reserved keyword in HTML.
// JSX uses the React.createElement('element_tag', props, 'innerHTML') to create the dom element. 
// React.createElement('h1', null, 'Hello World!') is the equivalent of below.

class App extends React.Component {
	// Use a constructor method to utilize STATE.
	constructor() {
		// Super gives the component the context of 'this' component rather than the parent class of React.Component.
		super();
		this.state = {
			txt: 'this is the state txt.',
			val: 1
		}
	}

	// After creating State, use custom methods to .setState, or update the state.
	update(e) {
		this.setState({txt: e.target.value})
	}

	add() {
		this.setState({val: this.state.val + 1})
	}

	render() {
		// React components can only return one 'node'.
		// To compensate for this, wrap multiple nodes in a parent node.
		// JavaScript must be placed before the return statement, or be interpolated within the return statement.
		//  
		let txt = this.props.txt;
		// let cat = this.props.cat;
		return (
			<div>
				<h1 className="">Hello World!</h1>
				{/* Testing the longhand:*/}
				{/* return React.createElement('h1', null, 'Hello World!'); */}
				{/* NOTE: JSX comments must be wrapped in braces. */}

				{/* Import props by using 'this.props.propName'. */}
				<h1>{this.props.txt}</h1>
				{/* Or, set the prop to a variable outside of the render method. */}
				<h1>{txt}</h1>
				{/* Use State by calling this.state.keyname. */}
				<h1>{this.state.txt}</h1>

				{/* <input type="text" onChange={this.update.bind(this)}/> */}
				{/* This is a nested component. The heart component is now a child of the Button component. */}
				<Button>I <Heart/> React</Button>

				{/* This is an imported component. See top for import statement. */}
				{/* When importing stateless components, the action can be passed as a prop to the component. */}
				<InputWidget update={this.update.bind(this)}/>
				<br/>
				<AddButton add={this.add.bind(this)} val={this.state.val}/>
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
	txt: "this is the defaultProps txt.",
}

// A stateless component only returns the return block and has not state.
// Example:
// const App = () => <h1>Hello stateless</h1>
 
export default App

