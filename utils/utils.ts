/**
 *
 * @param id
 * if the svg position is top or bottom
 */
export const isTop = (id: string): boolean => id.split('')[0] === 't';
/**
 *
 * @param index
 */
export const isReverse = (index: number): boolean => index % 2 !== 0;
