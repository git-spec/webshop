/** Next, React */
import React, { Component } from 'react';
/** Components */
import Grid from '../Grid/Grid';
import Box from '../Box/Box';
import { Card, CardHeader, CardMain, CardFooter } from '../Card/index';
import Media from '../Media/Media';
import Button from '../Button/Button';
/** Features */
import MoneyFormat from '../../features/MoneyFormat';

type Props = {
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }[];
    row?: string;
    col?: string;
};

/**
 * Cards of products.
 * @class Products
 * @extends Component
 * @param {Props} props
 * @return {JSX.Element}
 */
export default class Products extends Component<Props> {
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
        this.data = props.data;
        this.row = props.row;
        this.col = props.col;
    }

    render() {
        return (
            <Grid gap={{ row: this.row, col: this.col }}>
                {this.data.map((el) => {
                    return (
                        <Card key={el.id}>
                            <CardHeader>
                                <Media
                                    media="image"
                                    src={el.image}
                                    alt={el.name}
                                    width="100%"
                                    height="100%"
                                />
                            </CardHeader>
                            <CardMain>
                                <h3>{el.name}</h3>
                                <p>{el.description}</p>
                            </CardMain>
                            <CardFooter>
                                <Box>
                                    <MoneyFormat
                                        local="de-DE"
                                        currency="EUR"
                                        value={el.price}
                                    />
                                    <Button>Buy</Button>
                                </Box>
                            </CardFooter>
                        </Card>
                    );
                })}
            </Grid>
        );
    }
}
