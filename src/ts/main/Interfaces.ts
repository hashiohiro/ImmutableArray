export interface List<T>
{

    FromArray(array: T[]): List<T>;

    ToArray(): T[];

    Get(index: number): T;

    Head(): T;

    Tail(): List<T>;

    Last(): T

    Add(element: T): List<T>;

    Remove(element: T): List<T>;

    RemoveAll(): List<T>;

    IsEqual(list: List<T>): boolean;

    Length(): number;
}

export interface Collection<T>
{
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): Collection<U>;
    find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T;
    filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): Collection<T>;
    sort(compareFn?: (a: T, b: T) => number): Collection<T>;
}
