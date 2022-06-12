/** React */
import { Component, createRef, ReactElement, RefObject } from 'react';
/** Styles */
import styles from './navmenu.module.sass';

type Props = {
    children: ReactElement | ReactElement[];
    open?: boolean;
    subItem?: boolean;
    onToggle?: (value: boolean) => void;
};

/**
 * Class NavMenu.
 * @extends Component
 * @param {Props} props
 */
export default class NavMenu extends Component<Props> {
    open?: boolean;
    items: RefObject<HTMLUListElement>;

    constructor(props: Props) {
        super(props);
        this.open = props.open;
        this.items = createRef<HTMLUListElement>();
    }

    render() {
        return (
            <ul
                className={styles.list}
                ref={this.items}
                style={
                    this.props.open
                        ? {
                              height: this.items.current
                                  ? this.items.current.scrollHeight
                                  : '0px',
                          }
                        : { height: '0px' }
                }
            >
                {this.props.children}
            </ul>
        );
    }
}
