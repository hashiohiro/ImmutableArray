/**
 * 事前条件の検証で発生する例外
 */
export class RequireError extends Error
{
    constructor(message: string)
    {
        super();
        this.message = message;
    }
}

/**
 * Nullが与えられることを認めない引数に、Nullが与えられた場合に発生する例外
 */
export class ArgumentNullError extends RequireError
{
    constructor()
    {
        super(RequireErrorMessage.ArgumentIsNull);
    }
}

export class ArgumentRangeError extends RequireError
{
    constructor()
    {
        super(RequireErrorMessage.InvalidArrayLength);
    }
}

/**
 * エラーメッセージ定義
 */
export class RequireErrorMessage
{
    public static ArgumentIsNull = `引数がNullです`;
    public static InvalidArrayLength = "配列の長さが事前条件を満たしていません。"
}