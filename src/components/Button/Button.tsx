/** React */
import React, { Component, ReactChild, TouchEvent, MouseEvent } from 'react';
/** Styles */
import styles from './button.module.sass';

type Props = {
    children?: ReactChild | ReactChild[];
};

/**
 * @class Button
 * @extends Component
 */
export default class Button extends Component<Props> {
    children?: ReactChild | ReactChild[];

    constructor(props: Props) {
        super(props);
        this.children = props.children;
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
                onTouchStart={this.handleClick}
                onClick={this.handleClick}
            >
                {this.children}
            </button>
        );
    }
}
