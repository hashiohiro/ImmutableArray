import Contract from '../../lib/contract/Contract';
import { RequireError, RequireErrorMessage, ArgumentNullError, ArgumentRangeError } from './Errors';
import CompareHelper from './CompareHelper';
import HelperPreCondition from './HelperPreCondition';
/**
 * 配列操作に関するメソッドを提供するヘルパクラスです。
 * MEMO: 当クラスの処理はすべて"""副作用がなく、スレッドセーフ"""です。
 */
export default class ArrayHelper
{
    /**
     * 与えられた配列をディープコピーしたオブジェクトを返します。
     *
     * @param array コピーする配列
     * @return コピー後の新しい配列
     */
    public static DeepCopyArray(array: any[])
    {
        HelperPreCondition.DeepCopyArray(array);
        return array.slice();
    }

    public static AddElement<T>(array: T[], element: T): T[]
    {
        HelperPreCondition.AddElement(array, element);

        const copied = this.DeepCopyArray(array);
        copied.push(element);

        return copied;
    }

    /**
     * 与えられた要素を削除した配列を返します。
     *
     * @param array もととなる配列
     * @param element 削除する要素要素
     * @return 要素を削除した新しい配列
     */
    public static RemoveElement<T>(array: T[], element: T)
    {
        HelperPreCondition.RemoveElement(array, element);

        for (let i = 0; i < array.length; i++)
        {
            if (array[i] === element)
            {
                return this.RemoveElementByIndex(array, i);
            }
        }
        // 引数の参照を断ち切るためDeepCopyする。
        return this.DeepCopyArray(array);
    }

    /**
     * 与えられたインデックスの要素を削除した配列を返します。
     *
     * @param array もととなる配列
     * @param index 削除する要素のインデックス
     * @return 要素を削除した新しい配列
     */
    public static RemoveElementByIndex<T>(array: T[], index: number): T[]
    {
        HelperPreCondition.RemoveElementByIndex(array, index);

        const copied = this.DeepCopyArray(array);
        copied.splice(index, 1)

        return copied;
    }

    /**
     * 配列の先頭要素を返します。
     * 
     * @param array 
     */
    public static GetHead<T>(array: T[]): T
    {
        HelperPreCondition.GetHead(array);
        return this.DeepCopyArray(array)[0];
    }

    /**
     * 先頭要素を除いた配列を返します。
     * 
     * @param array 
     */
    public static GetTail<T>(array: T[]): T[]
    {
        HelperPreCondition.GetTail(array);
        return this.DeepCopyArray(array).slice(0, 1);
    }

    /**
     * 配列の末尾を取得します。
     * 
     * @param array 
     */
    public static GetLast<T>(array: T[]): T
    {
        HelperPreCondition.GetLast(array);
        return this.DeepCopyArray(array)[array.length - 1];
    }

    /**
     * 2つの配列の要素がすべて一致している場合はtrueを返します。
     * @param array1 
     * @param array2 
     */
    public static IsEqualArray<T>(array1: T[], array2: T[]): boolean
    {
        HelperPreCondition.IsEqualArray(array1, array2);
        return this.ZipArray(array1, array2).filter(tuple => tuple[0] !== tuple[0]).length == 0;
    }

    /**
     * 二種類の配列を結合して、新しい配列を生成します。
     * @param array1 
     * @param array2 
     */
    public static ZipArray<T, U>(array1: T[], array2: U[]): [T, U][]
    {
        HelperPreCondition.ZipArray(array1, array2);
        return <[T, U][]>array1.map((element, index) => [element, array2[index]]);
    }
}