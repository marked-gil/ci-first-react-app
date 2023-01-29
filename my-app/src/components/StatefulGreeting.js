import { Component } from "react";


class StatefulGreeting extends Component {
    render() {
        return <h1>Hello! {this.props.greeting} My name is {this.props.name}</h1>
    }
}

export default StatefulGreeting;