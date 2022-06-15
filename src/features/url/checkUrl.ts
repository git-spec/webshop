/**
 *Check url for existens, array or string.
 * @param {string | number} value
 * @param {string | string[] | undefined} url
 * @return {string}
 */
export const checkUrl = (
    value: string | number,
    url: string | string[] | undefined
): string => {
    let thisUrl: string;
    if (Array.isArray(url)) {
        const el = url.find((item) => {
            return item.endsWith(value.toString().toLowerCase());
        });
        thisUrl = el !== undefined ? el : "#";
    } else if (url && typeof url === "string") {
        thisUrl = url;
    } else {
        thisUrl = "#";
    }
    return thisUrl;
};
