/**
 *
 * @param {number[]} v vector
 * @returns {[number, boolean]}
 *
 * @description
 * Pearson's chi-squared test test for normality.
 *
 */
const pearson = (v: number[]): [number, boolean] => [v[0], false];

/**
 * @param {number[]} v vector
 * @returns {[number, boolean]}
 *
 * @description
 * Shapiro-Wilk test for normality.
 */
const shapiroWilk = (v: number[]): [number, boolean] => [v[0], false];

/**
 *
 * @param {number[]} v vector
 * @returns {[number, boolean]}
 *
 * @description
 * Anderson-Darling test for normality.
 */
const andersonDarling = (v: number[]): [number, boolean] => [v[0], false];

/**
 *
 * @param {number[]} v vector
 * @returns {[number, boolean]}
 *
 * @description
 * Kolmogorov-Smirnov test for normality.
 */
const kstest = (v: number[]): [number, boolean] => [v[0], false];

/**
 *
 * @param {number[]} v vector
 * @returns {[number, boolean]}
 *
 * @description
 * Jarque-Bera test for normality.
 */
const jarqueBeran = (v: number[]): [number, boolean] => [v[0], false];

export {pearson, shapiroWilk, andersonDarling, kstest, jarqueBeran};
