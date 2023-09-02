import React, { Component } from 'react';
import './counter.css';

interface counterProps {
    initialValue: number
};

interface CounterState {
    value: number
};

export default class Counter extends Component<counterProps> {
    state = {} as CounterState;

    constructor(props: {initialValue: number}) {
        super(props);
        this.state = {
          value: props.initialValue ?? 0,
        };
    }

    handleIncrement = () => {
        this.setState( (prevState: CounterState) => {
            return { value: ++prevState.value }
        });
    }

    handleDecrement = () => {
        this.setState( (prevState: CounterState) => {
            return { value: (prevState.value > 0 ? --prevState.value  : prevState.value) }
        });
    }

    render() {
        return(
            React.createElement(
                "div",
                { className: "counterContainer " },
                React.createElement(
                    "div",
                    {
                        className: "counterNumber",
                        children: this.state.value
                    }),
                React.createElement(
                    "div",
                    {
                        className: "buttonContainer",
                    },
                    React.createElement(
                        "button",
                        {
                            className: "increment",
                            onClick: this.handleIncrement
                        },
                        "Push to add one"),
                    React.createElement(
                        "button",
                        {
                            className: "decrement",
                            onClick: this.handleDecrement
                        },
                        "Push to substract one")
                ),
            )
        )
    }
}