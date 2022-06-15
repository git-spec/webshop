import React, { Component, ReactChildren, ReactElement } from "react";
import styles from "./card.module.sass";

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
};

/**
 * Class representing a main of card component.
 * @extends Component
 */
export default class CardMain extends Component<Props> {
    /**
     * Create a main element.
     * @param {ReactChildren | ReactElement | JSX.Element[] | JSX.Element} children - external components.
     */
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;

    constructor(props: Props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return <main className={styles.main}>{this.children}</main>;
    }
}
