/*
function Fragments(){
    return
    <h3>React JS Image :</h3>
    <p>I am the new paragraph</p>

}
If we want write more tags inside the Fragments that is not possible, we can achieve this by div ta
*/

/*
function Fragments(){
    return(
        <div>
            <h3> I am the React Js from Nested Componentt</h3>
            <p>I am the new para from same component which from previous</p>
            <span>I am the span Tag from same component</span>
        </div>
    )
}

export default Fragments

By adhering to JSX syntax the <div> tag can be used for grouping the elements
and this introduces an extra and unnecessary node into the DOM. As a solution to this,
React Fragments are introduced which is a common pattern in React for a component to return
multiple elements. React Fragments allows to group a list of React elements without adding any extra node to the DOM.

*/

// If we modify the previous code and that will be

/*
function Fragments(){
    return(
        <React.Fragment>
            <h3>Hello world!! React Js</h3>
            <p>I am the new para from same component which from previous</p>
            <span>I am the span Tag from same component</span>
        </React.Fragment>
    );
}
export default Fragments
*/

// can use empty tags instead of React. Fragment. And the code will be

function Fragment(){
    return(
        <>
        <h3>Hello world!! React JS</h3>
        <p>I am the new para from same component which from previous</p>
        <span>I am the span Tag from same component</span>
        </>
    )
}
export default Fragment
