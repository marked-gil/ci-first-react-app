import React from "react";


class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState(
            {
                introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            },
            () => {
                console.log('New state: ', this.state.introduction)
                console.log('New state: ',this.state.buttonText)
            }
        )
    }

    increment() {
        this.setState(
            {
                count: this.state.count + 1,
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=> this.handleClick()} >{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment by 1</button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;