/** Next, React */
import { Component } from 'react';
import Link from 'next/link';
/** Styles */
import styles from './logo.module.sass';

type Props = {
    classLogo?: string;
    callback?: Function;
};

/**
 * Class representing the logo component.
 * @extends Component
 */
export default class Logo extends Component<Props> {
    classLogo?: string;
    callback?: Function;
    /**
     * @param {Props} props - Class name
     */
    constructor(props: Props) {
        super(props);
        this.classLogo = props.classLogo;
        this.callback = props.callback;
    }

    activateCallback = () => {
        // eslint-disable-next-line no-invalid-this
        this.callback && this.callback();
    };

    /**
     * @return {JSX.Element} Logo
     */
    render(): JSX.Element {
        return (
            <Link href="/">
                <a
                    className={`${styles.logo} ${this.classLogo}`}
                    title="Logo"
                    onClick={this.activateCallback}
                    onTouchStart={this.activateCallback}
                    // style={background-image: url('/Adidas_Logo.svg')}
                >
                    {/* <img src="/vercel.svg" alt="Logo" /> */}
                </a>
            </Link>
        );
    }
}
