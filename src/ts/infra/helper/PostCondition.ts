import Contract from '../../lib/contract/Contract';
import CompareHelper from './CompareHelper';
import { ArgumentNullError } from './Errors';
export class PostCondition
{
    public static DeepCopyArray(out: any[]): any[]
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static AddElement<T>(out: T[]): T[]
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static RemoveElement<T>(out: T[])
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static RemoveElementByIndex<T>(out: T[]): T[]
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static GetHead<T>(out: T): T
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static GetTail<T>(out: T[]): T[]
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static GetLast<T>(out: T): T
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static IsEqualArray<T>(out: boolean): boolean
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }

    public static ZipArray<T, U>(out: [T, U][]): [T, U][]
    {
        Contract.Ensures(!CompareHelper.IsNull(out), new ArgumentNullError())
        return out;
    }
}