import ComparisonHelper from './ComparisonHelper';
import { ArgumentException, ContractHelperError } from './Errors';
export default class ContractHelper
{
    public static ShouldBeObjectEmpty<T>(object: T)
    {
        if (ComparisonHelper.IsNotObjectEmpty<T>(object))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeEmpty);
        }
    }

    public static ShouldBeNotObjectEmpty<T>(object: T)
    {
        if (ComparisonHelper.IsObjectEmpty<T>(object))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeNotEmpty);
        }
    }

    public static ShouldBeArrayEmpty<T>(array: T[])
    {
        if (ComparisonHelper.IsNotArrayEmpty<T>(array))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeArrayEmpty);
        }
    }

    public static ShouldBeNotArrayEmpty<T>(array: T[])
    {
        if (ComparisonHelper.IsArrayEmpty<T>(array))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeNotArrayEmpty);
        }
    }

    public static ShouldBeValueMore(value: number, more: number)
    {
        if (ComparisonHelper.IsValueEqualOrLess(value, more))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeValueMore);
        }
    }
    
    public static ShouldBeValueLess(value: number, less: number)
    {
        if (ComparisonHelper.IsValueEqualOrMore(value, less))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeValueLess);
        }
    }

    public static ShouldBeValueEqualOrMore(value: number, orMore: number)
    {
        if (ComparisonHelper.IsValueLess(value, orMore))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeValueEqualOrMore);
        }
    }

    public static ShouldBeValueEqualOrLess(value: number, orLess: number)
    {
        if (ComparisonHelper.IsValueMore(value, orLess))
        {
            throw new ArgumentException(ContractHelperError.ShouldBeValueEqualOrLess);
        }
    }
}