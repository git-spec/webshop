/** Interfaces */
import { IProduct } from '../../interfaces/IProduct';

export const getTotalPrice = (props: IProduct | IProduct[]) => {
    let totalPrice: number = 0;
    Array.isArray(props)
        ? props.forEach((el) => {
              totalPrice += el.price;
          })
        : (totalPrice = props.price);
    return totalPrice;
};
