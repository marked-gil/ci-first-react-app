// import { Component } from "react";
import React from "react";


class StatefulGreeting extends React.Component {
    // A special method that is always called when the class is first instantiated
    // & where 'state' is usually defined in class components. 
    constructor(props) {
        super(props);   // Ensures that the constructor for the parent class (React.Component) is also called;
                        // Also best practice to pass 'props' to both the constructor method & super() function,
                        // so any props you've passed into the component are also passed through when calling super.
        
        // As soon as this class is instantiated, it will automatically have a property called 'state'
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting} My name is {this.props.name}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;