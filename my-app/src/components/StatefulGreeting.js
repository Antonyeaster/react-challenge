import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    incrementClick() {
        this.setState({
        count: this.state.count + 1
        }, ()=>{
        console.log('new state', this.state.count);
        });
    }

    handleClick() {
       this.setState({
        introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
        buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
       }, ()=> {
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
       });
    }

    render() {
        return (
        <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={() => this.incrementClick()}>increment</button>
            <p>You've clicked the button {this.state.count} times</p>
        </div>
        )
    }
}

export default StatefulGreeting;