/*
function Expression(){
    let count=5;
    return(
        <>
        <h1>{count}</h1>
        <h2>{count*count}</h2>
        </>
    )
}
*/

/*
function Expression(){
    let name={
        firstName: "Raghuram",
        lastName: "Reddy"
};

    return(
        <>
        <h2>
            {name.firstName}{name.lastName}
        </h2>

        </>

    )
}
export default Expression
*/

function Expression(){

    var x=25, y=30

    return(
        <>
        <h2>Evaluating the Expression from Component</h2>
        <h3>{x}{">"}{y}{":"}{x>y ? 'True':'False'}</h3>
        </>
    );
}
export default Expression