import React from "react";
// import { render } from "@testing-library/react";

const AddButton = (props) => {
    // debugger;
    return <button onClick={props.add}>{props.val}</button>
}

// class AddButton extends React.Component {

    // const add = (props.val) => {
    //     props.val = props.val + 1;
    // }

    // render(
    //     <button onClick={this.add}>{props.val}</button>;
    // )
// }

export default AddButton