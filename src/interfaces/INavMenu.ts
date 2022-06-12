export interface INavMenu {
    // map?(value: INavItem["subItem"]): JSX.
    // children?: Element | Element[];
    idx?: string;
    item?: string;
    subItem?: string[];
    select?: string | boolean | null;
    focus?: boolean | null;
}
