/** React */
import React, {
    FunctionComponent,
    ReactChild,
    TouchEvent,
    MouseEvent,
} from 'react';
/** Styles */
import styles from './button.module.sass';

type Props = {
    children?: ReactChild | ReactChild[];
    callback?: {};
    bRadius?: string;
};

/**
 * Button component.
 * @param {Props} props
 * @returns {JSX.Element}
 */
const Button: FunctionComponent<Props> = (props: Props): JSX.Element => {
    /**
     * Handle click on button.
     * @param {MouseEvent | TouchEvent} e - Mouse or touch event.
     */
    function handleClick(e: MouseEvent | TouchEvent, callback: any): void {
        e.preventDefault();
        callback();
    }

    /**
     * @return {JSX.Element} Button
     */
    return (
        <button
            type="button"
            // {...this.props}
            className={styles.btn}
            style={{ borderRadius: props.bRadius }}
            onTouchStart={(e) => handleClick(e, props.callback)}
            onClick={(e) => handleClick(e, props.callback)}
        >
            {props.children}
        </button>
    );
};

export default Button;
