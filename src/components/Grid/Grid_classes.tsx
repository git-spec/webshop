import React, { Component, ReactChildren, ReactElement } from 'react';
import styles from './grid.module.sass';

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
    col?: number;
    gap?: number | { col?: number; row?: number };
};

/**
 * Class representing a grid component.
 * @extends Component
 */
export default class Grid extends Component<Props> {
    /**
     * Create a grid element.
     * @param {ReactChildren | ReactElement | JSX.Element[] | JSX.Element} children - Elements inside grid.
     * @param {number | undefined} col - Number of columns.
     * @param {number | object | undefined} gap - Size of gap.
     */
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
    col?: number;
    gap?: number | { col?: number; row?: number };

    constructor(props: Props) {
        super(props);
        this.children = props.children;
        this.col = props.col;
        this.gap = props.gap;
    }

    /**
     * Get the image element.
     * @param {number | undefined} col - Number of columns.
     * @param {number | object | undefined} gap - Size of gap.
     * @return {string | undefined} Class name.
     */
    getClassName(): string | undefined {
        if (!this.col) {
            if (!this.gap) {
                return styles.grid_0;
            } else {
                switch (this.gap) {
                    case typeof this.gap === 'number':
                        return `${styles.grid}_c${this.gap}_r${this.gap}`;
                    case typeof this.gap !== 'number' &&
                        this.gap.col &&
                        this.gap.row:
                        return `${styles.grid}_c${
                            typeof this.gap !== 'number' && this.gap.col
                        }_r${typeof this.gap !== 'number' && this.gap.row}`;
                    case typeof this.gap !== 'number' && this.gap.col:
                        return `${styles.grid}_c${
                            typeof this.gap !== 'number' && this.gap.col
                        }`;
                    case typeof this.gap !== 'number' && this.gap.row:
                        return `${styles.grid}_r${
                            typeof this.gap !== 'number' && this.gap.row
                        }`;
                    default:
                        return;
                }
            }
        } else {
            if (!this.gap) {
                return `${styles.grid}_${this.col}`;
            } else {
                switch (this.gap) {
                    case typeof this.gap === 'number':
                        return `${styles.grid}_${this.col}_c${this.gap}_r${this.gap}`;
                    case typeof this.gap !== 'number' &&
                        this.gap.col &&
                        this.gap.row:
                        return `${styles.grid}_${this.col}_c${
                            typeof this.gap !== 'number' && this.gap.col
                        }_r${typeof this.gap !== 'number' && this.gap.row}`;
                    case typeof this.gap !== 'number' && this.gap.col:
                        return `${styles.grid}_${this.col}_c${
                            typeof this.gap !== 'number' && this.gap.col
                        }`;
                    case typeof this.gap !== 'number' && this.gap.row:
                        return `${styles.grid}_${this.col}_r${
                            typeof this.gap !== 'number' && this.gap.row
                        }`;
                    default:
                        return;
                }
            }
        }
    }

    /**
     * @return {JSX.Element} Grid
     */
    render(): JSX.Element {
        return <div className={this.getClassName()}>{this.children}</div>;
    }
}
