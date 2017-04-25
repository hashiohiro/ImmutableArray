export default class Contract
{
    /**
     * 事前条件を満たしているか、検証します。
     * 
     * @param condition 
     * @param userMessage 
     */
    public static Requires(condition: boolean, error?: Error): boolean
    {
        return this.CheckCondition(condition, error);
    }

    /**
     * 事後条件を満たしているか、検証します。
     * 
     * @param condition 
     * @param userMessage 
     */
    public static Ensures(condition: boolean, error?: Error): boolean
    {
        return this.CheckCondition(condition, error);
    }

    /**
     * 不変条件を満たしているか、検証します。
     * 
     * @param condition 
     */
    public static Invariant(condition: boolean, error?: Error): boolean
    {
        return this.CheckCondition(condition, error);
    }

    /**
     * 共通のチェック処理
     * 
     * @param condition 
     * @param error 
     */
    private static CheckCondition(condition: boolean, error?: Error): boolean
    {
        if (condition) { return true; }
        return this.ErrorCase(error);
    }

    /**
     * エラー発生時の処理
     * Errorをスローするか、falseを返します。
     * 
     * @param error 
     */
    private static ErrorCase(error?: Error): boolean
    {
        if (error == null) { return false; }
        else { throw error; }
    }
}