import React, { Component, ReactChildren, ReactElement } from "react";
import styles from "./card.module.sass";

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
};

/**
 * Class representing a header of card component.
 * @extends Component
 */
export default class CardHeader extends Component<Props> {
    /**
     * Create a header element.
     * @param {ReactChildren | ReactElement | JSX.Element[] | JSX.Element} children - external components.
     */
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;

    constructor(props: Props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return <header className={styles.header}>{this.children}</header>;
    }
}
