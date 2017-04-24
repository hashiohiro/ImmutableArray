export class InvalidOperationError extends Error {}
export class ArgumentException extends Error {}

export class ArrayHelperError
{
    public static readonly SeqNoContainElements = "シーケンスに、一致する要素は含まれていません";
}

export class ContractHelperError
{
    public static readonly ShouldBeEmpty = "契約違反: オブジェクトは空であるべきです";
    public static readonly ShouldBeNotEmpty = "契約違反: オブジェクトは空ではいけません";
    public static readonly ShouldBeArrayEmpty = "契約違反: 配列は空であるべきです";
    public static readonly ShouldBeNotArrayEmpty = "契約違反: 配列は空ではいけません";
    public static readonly ShouldBeValueMore = "契約違反: 規定の値を下回っています";
    public static readonly ShouldBeValueEqualOrMore = "契約違反: 規定の値を下回っています";
    public static readonly ShouldBeValueLess = "契約違反: 規定の値を上回っています";
    public static readonly ShouldBeValueEqualOrLess = "契約違反: 規定の値を上回っています";
}