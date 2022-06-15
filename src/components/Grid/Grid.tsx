import { Component, ReactChildren, ReactElement } from 'react';
// import CSS from 'csstype';

type Props = {
    children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
    col?: number;
    gap?: string | { col?: string; row?: string };
};

/**
 * Component of grid.
 * @class Grid
 * @extends Component
 */
export default class Grid extends Component<Props> {
    /**
     * Create a grid element.
     * @param {ReactChildren | ReactElement | JSX.Element[] | JSX.Element} children - external components.
     * @param {number} col - number of columns.
     * @param {string | {string | string}} gap - sizes of gap.
     * @private
     */
    #children: ReactChildren | ReactElement<any> | JSX.Element[] | JSX.Element;
    #col?: number;
    #gap?: string | { col?: string; row?: string };

    constructor(props: Props) {
        super(props);
        this.#children = props.children;
        this.#col = props.col;
        this.#gap = props.gap;
    }

    /**
     * Get styles of grid.
     * @access private
     * @return {Object} style properties.
     */
    #stylingProps(): Object {
        const properties: {
            display: string;
            gridTemplateColumns: string;
            gap?: string;
        } = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        };
        if (this.#col)
            properties.gridTemplateColumns = `repeat(${
                this.#col
            }, minmax(320px, 1fr))`;
        if (this.#gap && typeof this.#gap === 'object') {
            properties.gap = `${this.#gap.row && this.#gap.row} ${
                this.#gap.col && this.#gap.col
            }`;
        } else if (this.#gap) {
            properties.gap = this.#gap;
        }
        return properties;
    }

    render() {
        return <div style={this.#stylingProps()}>{this.#children}</div>;
    }
}
