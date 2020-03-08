import React from "react";

// Creating a stateless input component.
const InputWidget = (props) => (
    <input type="text" onChange={props.update} />
)

export default InputWidget