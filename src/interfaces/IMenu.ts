export interface IMenu {
    item: string;
    url?: string;
    subItem?: { item: string; url: string }[];
}
