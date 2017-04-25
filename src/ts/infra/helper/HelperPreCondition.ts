import Contract from '../../lib/contract/Contract';
import CompareHelper from './CompareHelper';
import { ArgumentNullError, ArgumentRangeError } from './Errors';
export default class HelperPreCondition
{
    public static DeepCopyArray(array: any[]): void
    {
        Contract.Requires(!CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
    }

    public static AddElement<T>(array: T[], element: T): void
    {
        Contract.Requires(!CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
        Contract.Requires(!CompareHelper.IsNullOrUndefined(element), new ArgumentNullError());
    }

    public static RemoveElement<T>(array: T[], element: T)
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
        Contract.Requires(CompareHelper.IsNullOrUndefined(element), new ArgumentNullError());
    }

    public static RemoveElementByIndex<T>(array: T[], index: number): void
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
        Contract.Requires(CompareHelper.IsNullOrUndefined(index), new ArgumentNullError());
        Contract.Requires(array.length >= 0, new ArgumentRangeError());
        Contract.Requires(index < array.length, new ArgumentRangeError());
    }

    public static GetHead<T>(array: T[]): void
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
    }

    public static GetTail<T>(array: T[]): void
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
    }

    public static GetLast<T>(array: T[]): void
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array), new ArgumentNullError());
    }

    public static IsEqualArray<T>(array1: T[], array2: T[]): void
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array1), new ArgumentNullError());
        Contract.Requires(CompareHelper.IsNullOrUndefined(array2), new ArgumentNullError());
    }

    public static ZipArray<T, U>(array1: T[], array2: U[]): void
    {
        Contract.Requires(CompareHelper.IsNullOrUndefined(array1), new ArgumentNullError());
        Contract.Requires(CompareHelper.IsNullOrUndefined(array2), new ArgumentNullError());
        Contract.Requires(CompareHelper.IsEqual(array1.length, array2.length), new ArgumentRangeError())
    }
}