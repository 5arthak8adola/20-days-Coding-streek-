function show( msg ){
    msg = 42;
    console.log( msg );          // msg === 42
    console.log( arguments[0] ); // arguments === 42
}
show( "Hey" );

// In strict mode arguments[i] does not track the value of 
// the corresponding named argument, nor does a named argument track the value in the corresponding arguments[i]
function showStrict( msg ){
    "use strict";
    msg = 42;
    console.log( msg );          // msg === 42
    console.log( arguments[0] ); // arguments === "Hey"
}
showStrict( "Hey" );
