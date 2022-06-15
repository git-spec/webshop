/** Next, React */
import React, { Component } from 'react';
/** Components */
import Products from '../../../components/Products/Products';
/** Data */
import data from '../../../data/products.json';

type Props = {
    children: JSX.Element;
};

/**
 * Page of Produktgruppe1
 * @class Productgruppe1
 * @extends Component
 * @return {JSX.Element}
 */
export default class Produktgruppe1 extends Component<Props> {
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }[];
    row?: string;
    col?: string;

    constructor(props: Props) {
        super(props);
        this.data = data.productgroup1;
    }

    render() {
        return <Products data={this.data} row="2rem" col="1rem" />;
    }
}
