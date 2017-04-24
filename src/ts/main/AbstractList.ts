import { List, Collection } from './Interfaces';

export abstract class AbstractList<T> implements List<T>, Collection<T>
{
    public abstract FromArray<U>(array: U[]): List<U>;

    public abstract ToArray(): T[];

    public abstract Get(index: number): T;

    public abstract Head(): T;

    public abstract Tail(): List<T>;

    public abstract Last(): T;

    public abstract Add(element: T): AbstractList<T>;

    public abstract Remove(element: T): AbstractList<T>;

    public abstract RemoveAll(): AbstractList<T>;

    public abstract IndexOf(element: T): number;

    public abstract Length(): number;

    public abstract IsEqual(list: List<T>): boolean;

    public map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): AbstractList<U>
    {
        return <AbstractList<U>>this.FromArray<U>(this.ToArray().map(callbackfn));
    }

    public find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T
    {
        return this.ToArray().find(predicate);
    }

    public filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): AbstractList<T>
    {
        return <AbstractList<T>>this.FromArray(this.ToArray().filter(callbackfn));
    }

    public sort(compareFn?: (a: T, b: T) => number): AbstractList<T>
    {
        return <AbstractList<T>>this.FromArray(this.ToArray().sort(compareFn));
    }
}
