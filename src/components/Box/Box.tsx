import React, { Component, ReactChildren, ReactElement } from 'react';
import styles from './box.module.sass';

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
};

/**
 * Component of wrapper.
 * @class Box
 * @extends Component
 */
export default class Box extends Component<Props> {
    /**
     * Create a wrapper element.
     * @param {ReactChildren | ReactElement | JSX.Element[] | JSX.Element} children - external components.
     */
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;

    constructor(props: Props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return <div className={styles.box}>{this.children}</div>;
    }
}
