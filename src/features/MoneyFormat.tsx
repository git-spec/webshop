import { FunctionComponent } from 'react';
import { INumberFormat } from '../interfaces/INumberFormat';

/**
 * Set local currency.
 * @param {Props} props Local, currency and value.
 * @return {JSX.Element}
 */
const MoneyFormat: FunctionComponent<INumberFormat> = (
    props: INumberFormat
): JSX.Element => {
    const numberFormat = new Intl.NumberFormat(props.local, {
        style: 'currency',
        currency: props.currency,
    });

    return <span>{numberFormat.format(props.value / 100)}</span>;
};

export default MoneyFormat;
