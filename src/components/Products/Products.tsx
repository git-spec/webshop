/** Next, React */
import React, { FunctionComponent } from 'react';
/** Components */
import Grid from '../Grid/Grid';
import Box from '../Box/Box';
import { Card, CardHeader, CardMain, CardFooter } from '../Card/index';
import Media from '../Media/Media';
import Button from '../Button/Button';
/** Features */
import MoneyFormat from '../../features/MoneyFormat';
import { addToCart } from '../../features/cart/cartSlice';
/** Redux */
import { useAppSelector, useAppDispatch } from '../../app/hooks';
/** Interfaces */
import { IProduct } from '../../interfaces/IProduct';

type Props = {
    data: IProduct[];
    row?: string;
    col?: string;
};

/**
 * Cards of products.
 * @param {Props} props
 * @return {JSX.Element}
 */
const Products: FunctionComponent<Props> = (props: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    // /**
    //  * Handle dispatch to redux store.
    //  * @param {IProduct} item
    //  * @returns {IProduct}
    //  */
    // function handleDispatch(item: IProduct): {} {
    //     console.log(item);

    //     return dispatch(addToCart(item));
    // }

    return (
        <Grid gap={{ row: props.row, col: props.col }}>
            {props.data.map((el) => {
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
                                <Button
                                    bRadius="8% / 20%"
                                    callback={() => dispatch(addToCart(el))}
                                >
                                    Add to Cart
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                );
            })}
        </Grid>
    );
};

export default Products;
