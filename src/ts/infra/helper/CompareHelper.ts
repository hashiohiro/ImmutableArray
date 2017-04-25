/**
 * よく使う比較パターンを提供します。
 */
export default class CompareHelper
{
    public static IsNull(value: any): boolean
    {
        return this.IsEqual(value, null);
    }

    public static IsUndefined(value: any): boolean
    {
        return this.IsEqual(value, undefined);
    }

    public static IsNullOrUndefined(value: any): boolean
    {
        return this.IsUndefined(value) || this.IsNull(value);
    }

    public static IsEqual(value1: any, value2: any): boolean
    {
        return value1 === value2;
    }
}