import React from "react";

// Creating a stateless input component.
const Button = (props) => (
    // in this case, props.children refers to the innerHTML within <Button> in app.js.
    // You can see the props' children in the Components console within the browser.
    // Using .children will utilize that value. 
    <button>{props.children}</button>
)

export const Heart = (props) => (
    <span>&hearts;</span>
)

export default Button