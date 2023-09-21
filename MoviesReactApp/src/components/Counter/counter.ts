import React, { Component } from 'react';
import './counter.css';

 /**
 * Default value when user opens the page
 */
interface counterProps {
    /**
     * Default value when user opens the page
     */
    initialValue: number
};
 /**
 * Default value when user opens the page
 */
interface CounterState {
    value: number
};

/**
 * Default value when user opens the page
 */
export class Counter extends Component<counterProps> {
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