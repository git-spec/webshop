/** React */
import React from 'react';
/** Redux */
import { useAppSelector, useAppDispatch } from '../../app/hooks';
/** Components */
import Grid from '../../components/Grid/Grid';
import Box from '../../components/Box/Box';
import {
    Card,
    CardHeader,
    CardMain,
    CardFooter,
} from '../../components/Card/index';
import Media from '../../components/Media/Media';
/** Features */
import { getTotalPrice } from '../../features/price/getTotalPrice';
import MoneyFormat from '../../features/MoneyFormat';
/** Interfaces */
import { IQuantity } from '../../interfaces/IQuantity';

export default function Cart(): JSX.Element {
    // Extracting cart state from redux store
    const cart: IQuantity[] = useAppSelector((state) => state.cart);

    // Reference to the dispatch function from redux store
    const dispatch = useAppDispatch();

    return (
        <div>
            {cart.length === 0 ? (
                <h1>Your Cart is Empty!</h1>
            ) : (
                <>
                    <Grid gap={{ row: '2rem' }}>
                        {cart.map((el) => {
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
                                    </CardMain>
                                    <CardFooter>
                                        <Box>
                                            <div>{el.quantity}</div>
                                            <MoneyFormat
                                                local="de-DE"
                                                currency="EUR"
                                                value={el.price}
                                            />
                                        </Box>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </Grid>
                    <p>
                        Grand Total:{' '}
                        <MoneyFormat
                            local="de-DE"
                            currency="EUR"
                            value={getTotalPrice(cart)}
                        />
                    </p>
                </>
            )}
        </div>
    );
}
