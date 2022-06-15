import React, { Component, ReactChildren, ReactElement } from 'react';
import styles from './card.module.sass';

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
};

/**
 * Class representing a footer of card component.
 * @extends Component
 */
export default class CardFooter extends Component<Props> {
    /**
     * Create a footer element.
     * @param {ReactChildren | ReactElement | JSX.Element[] | JSX.Element} children - external components.
     */
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;

    constructor(props: Props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return <footer className={styles.footer}>{this.children}</footer>;
    }
}
