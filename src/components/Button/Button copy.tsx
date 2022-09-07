/** React */
import React, { Component, ReactChild, TouchEvent, MouseEvent } from 'react';
/** Styles */
import styles from './button.module.sass';

type Props = {
    children?: ReactChild | ReactChild[];
    callback?: {};
};

/**
 * @class Button
 * @extends Component
 */
export default class Button extends Component<Props> {
    children?: ReactChild | ReactChild[];
    callback?: {};

    constructor(props: Props) {
        super(props);
        this.children = props.children;
        this.callback = props.callback;
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Handle click on button.
     * @param {MouseEvent | TouchEvent} e - Mouse or touch event.
     */
    handleClick(e: MouseEvent | TouchEvent) {
        e.preventDefault();
    }

    /**
     * @return {JSX.Element} Button
     */
    render(): JSX.Element {
        return (
            <button
                type="button"
                // {...this.props}
                className={styles.btn}
                onTouchStart={(e) => this.handleClick(e)}
                onClick={(e) => {
                    this.handleClick(e);
                }}
            >
                {this.children}
            </button>
        );
    }
}
