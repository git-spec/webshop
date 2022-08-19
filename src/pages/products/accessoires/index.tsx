/** Next, React */
import React, { Component } from 'react';
/** Components */
import Products from '../../../components/Products/Products';
/** Interfaces */
import { IProduct } from '../../../interfaces/IProduct';

type Props = {
    children: JSX.Element;
    data: IProduct[];
};

/**
 * Page of Produktgruppe1
 * @class Productgruppe1
 * @extends Component
 * @return {JSX.Element}
 */
export default class Accessoires extends Component<Props> {
    data: IProduct[];
    row?: string;
    col?: string;

    constructor(props: Props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <Products
                data={this.data.filter(
                    (item) => item.category == 'accessoires'
                )}
                row="2rem"
                col="1rem"
            />
        );
    }
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8000/api/products`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}
