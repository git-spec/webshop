import React, { Component, ReactChildren, ReactElement } from "react";
import styles from "./card.module.sass";

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
};

/**
 * Class representing a card component.
 * @extends Component
 */
export default class Card extends Component<Props> {
    /**
     * Create a card element.
     * @param {ReactChildren | ReactElement} children - external components.
     */
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;

    constructor(props: Props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return <article className={styles.container}>{this.children}</article>;
    }
}
