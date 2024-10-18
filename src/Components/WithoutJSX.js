import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function App1(){
    return(
        React.createElement('form',{},
        React.createElement("h1",{},"Login"),
        React.createElement('input',{type:'text',placeholder:'Name','value':''}),
        React.createElement('br', {}),
        React.createElement('br',{}),
        React.createElement('input',{type:'password',placeholder:'password','value':''}),
        React.createElement('br',{}),
        React.createElement('br',{}),
        React.createElement("button",{type:'submit'},"Login"))
        )
}

export default App1;

/*
From the above code, it is observed that more lines of JavaScript code need to be written to
implement the Login component. The Code looks difficult to understand and hence productivity goes down.
JSX has been introduced in React to create elements that are very easy to read and write,
which makes the component's code simple and understandable.
The above Login component can be written using JSX in an easier way:
*/

// Ex: JavaScript Code(Without JSX)
  // React.createElement("h1",{},"Hello World!!!");

// Ex: JSX Code
  // <h1> "Hello WOrld!!!"</h1>
