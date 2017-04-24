import { AbstractList } from './AbstractList';
import { IndexOutOfRangeError, CollectionErrorMessage } from './Errors';
import { List } from './Interfaces';
import ArrayHelper from '../infra/helper/ArrayHelper';
import ContractHelper from '../infra/helper/ContractHelper';
import ComparisonHelper from '../infra/helper/ComparisonHelper';

/**
 * 順序を保証するリスト型のコレクションです。
 */
export class ImmutableArray<T> extends AbstractList<T>
{
    private list: T[];

    constructor(array: T[] = null) {
        super();
        this.InitArrayList(array);
    }

    public FromArray(array: T[]): List<T>
    {
        return <List<T>> new ImmutableArray<T>(array);
    }

    public ToArray(): T[]
    {
        return ArrayHelper.DeepCopyArray(this.list);
    }

    public Get(index: number): T
    {
        return this.GetElementByIndex(index);
    }

    public  Head(): T
    {
        return <T>ArrayHelper.GetHead(this.list);
    }

    public  Tail(): List<T>
    {
        return this.FromArray(ArrayHelper.GetTail(this.list));
    }

    public  Last(): T
    {
        return <T>ArrayHelper.GetLast(this.list);
    }

    public Add(element: T): ImmutableArray<T>
    {
        ContractHelper.ShouldBeNotObjectEmpty<T>(element);
        return new ImmutableArray<T>(ArrayHelper.AddElement(this.list, element));
    }

    public Remove(element: T): ImmutableArray<T>
    {
        ContractHelper.ShouldBeNotObjectEmpty<T>(element);
        return new ImmutableArray<T>(ArrayHelper.RemoveElement(this.list, element));
    }

    public RemoveByIndex(index: number): ImmutableArray<T>
    {
        ContractHelper.ShouldBeNotObjectEmpty(index);
        ContractHelper.ShouldBeValueEqualOrMore(index, 0)
        ContractHelper.ShouldBeValueEqualOrLess(index, this.Length() - 1)

        return new ImmutableArray<T>(ArrayHelper.RemoveElementByIndex(this.list, index))
    }

    public RemoveAll(): ImmutableArray<T>
    {
        return new ImmutableArray<T>([]);
    }

    public IndexOf(element: T): number
    {
        ContractHelper.ShouldBeNotObjectEmpty<T>(element);
        return this.list.indexOf(element);
    }

    public Length(): number
    {
        return this.list.length;
    }

    public IsEqual(list: List<T>): boolean
    {
        ContractHelper.ShouldBeNotObjectEmpty(list.ToArray());
        return ArrayHelper.IsEqualArray(this.list, list.ToArray());
    }

    private InitArrayList(array: T[] = null): void
    {
        this.list = ComparisonHelper.IsObjectEmpty(array) ? [] : array;
    }

    private GetElementByIndex(index: number): T
    {
        ContractHelper.ShouldBeNotObjectEmpty(index);
        ContractHelper.ShouldBeValueEqualOrMore(index, 0);
        ContractHelper.ShouldBeValueEqualOrLess(index, this.Length() - 1);

        return this.list[index];
    }
}
