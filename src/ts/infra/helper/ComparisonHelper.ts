/**
 * よく使う比較パターンを提供します。
 */
export default class ComparisonHelper
{
    /**
     * オブジェクトが空の場合はtrueを返します。
     * @param object 
     */
    public static IsObjectEmpty<T>(object: T): boolean
    {
        return object == null || object === undefined;
    }

    /**
     * オブジェクトが空ではない場合はtrueを返します。
     * @param object 
     */
    public static IsNotObjectEmpty<T>(object: T): boolean
    {
        return !(object == null || object === undefined);
    }

    /**
     * 配列が空の場合はtrueを返します。
     * @param array 
     */
    public static IsArrayEmpty<T>(array: T[]): boolean
    {
        return this.IsObjectEmpty<T[]>(array) || array.length == 0;
    }

    /**
     * 配列が空ではない場合はtrueを返します。
     * @param array 
     */
    public static IsNotArrayEmpty<T>(array: T[]): boolean
    {
        return this.IsNotObjectEmpty<T[]>(array) && array.length == 0;
    }

    /**
     * 値がmoreより大きい場合はtrueを返します。
     * @param value 
     * @param more 
     */
    public static IsValueMore(value: number, more: number)
    {
        return value > more;
    }

    /**
     * 値がlessより小さい場合はtrueを返します。
     * @param value 
     * @param less 
     */
    public static IsValueLess(value: number, less: number)
    {
        return value < less;
    }

    /**
     * 値がorMore以上の場合はtrueを返します。
     * @param value 
     * @param orMore 
     */
    public static IsValueEqualOrMore(value: number, orMore: number)
    {
        return value >= orMore;
    }

    /**
     * 値がorLess以下の場合はtrueを返します。
     * @param value 
     * @param orLess 
     */
    public static IsValueEqualOrLess(value: number, orLess: number)
    {
        return value <= orLess;
    }
}