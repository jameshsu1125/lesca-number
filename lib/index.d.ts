import { ClientRect, Size } from './type';
/**
 * dynamic fix string length // 1 => 0001, 2 => 0002
 * @param {string | number} num file-path
 * @param {*} len
 * @returns
 */
declare const Pad: (num: string | number, len?: number) => string;
/**
 * random id generator
 * @param {number} len id length
 * @returns random string
 */
declare const Uid: (len?: number) => string;
/**
 * number to dollar. ( 1000 => 1,000 )
 * @param {number | string} Num
 * @returns dollar string
 */
declare const Dollar: (Num: number | string) => string;
/**
 * get current scrolltop for any browswer
 * @returns scrolltop
 */
declare const ScrollTop: () => number | undefined;
/**
 * get client position of element
 * @param {HTMLElement} ele
 * @returns top and left object
 */
declare const Position: (ele: HTMLElement) => {
    top: number;
    left: number;
} | undefined;
/**
 * calc object clientRect of cover size { width, height, top, left }
 * @param imageSize
 * @param containerSize
 * @returns
 */
declare const CoverSize: (imageSize?: Size, containerSize?: Size) => ClientRect;
declare const Mise: {
    Pad: (num: string | number, len?: number) => string;
    Uid: (len?: number) => string;
    Dollar: (Num: number | string) => string;
    ScrollTop: () => number | undefined;
    Position: (ele: HTMLElement) => {
        top: number;
        left: number;
    } | undefined;
    CoverSize: (imageSize?: Size, containerSize?: Size) => ClientRect;
};
export default Mise;
export { Pad, Uid, Dollar, ScrollTop, Position, CoverSize };
