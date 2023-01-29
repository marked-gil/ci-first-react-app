import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello, {props.greeting}</h1>
            <h2> My name is {props.name} - {props.age} years old.</h2>
        </div>
        );
};

export default FunctionalGreetingWithProps;