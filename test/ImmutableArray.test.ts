import * as assert from "power-assert";
import * as mocha from "mocha";
import { ImmutableArray } from '../src/ts/main/ImmutableArray';



describe("ImmutableArray#constructor", () => {
    it("コンストラクタ引数が与えられなかった場合は空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray().Length() == 0);
    });

    it("コンストラクタ引数に配列が与えられた場合は、配列からImmutableArrayを生成する", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Length() == 10);
    });

    it("コンストラクタにnullが与えられた場合は、空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray(null).Length() == 0);
    });

    it("コンストラクタにundefinedが与えられた場合は、空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray(undefined).Length() == 0);
    });

    it("コンストラクタに空の配列が与えられた場合は、空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray([]).Length() == 0);
    });

});

describe("ImmutableArray#FromArray", () => {
    it("引数に配列が与えられた場合は、配列からImmutableArrayを生成する", () => {
        assert(new ImmutableArray().FromArray([0,1,2,3,4,5,6,7,8,9]).Length() == 10);
    });

    it("引数にnullが与えられた場合は、空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray().FromArray(null).Length() == 0);
    });

    it("引数にundefinedが与えられた場合は、空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray().FromArray(undefined).Length() == 0);
    });

    it("引数に空の配列が与えられた場合は、空のImmutableArrayを生成する", () => {
        assert(new ImmutableArray().FromArray([]).Length() == 0);
    });
});


describe("ImmutableArray#ToArray", () => {
    it("空のImmutableArrayから配列を生成する場合は、空の配列を生成する", () => {
        assert(new ImmutableArray().ToArray().length == 0);
    });

    it("値を持つImmutableArrayから配列を生成する場合は、素となるImmutableArrayと同じ要素を持つ配列を生成する", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).ToArray().length == 10);
    });
});

describe("ImmutableArray#Get", () => {
    it("存在する要素のインデックスが引数に与えられた場合は、該当する要素を返す", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Get(9) == 9);
    });

    it("存在しない要素のインデックスが引数に与えられた場合は、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Get(10) == 9 });
    });

    it("引数にnullが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Get(null) });
    });

    it("引数にundefinedが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Get(undefined) });
    });

});

describe("ImmutableArray#Head", () => {
    it("ImmutableArrayに要素が存在する場合は、先頭要素を返す", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Head() == 0)
    });

    it("ImmutableArrayが空の場合は、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Head() })
    });
});

describe("ImmutableArray#Tail", () => {
    it("ImmutableArrayに要素が存在する場合は、先頭要素を除いたImmutableArrayを返す", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Tail().IsEqual(new ImmutableArray([1,2,3,4,5,6,7,8,9])))
    });

    it("ImmutableArrayが空の場合は、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Tail() })
    });

});

describe("ImmutableArray#Last", () => {
    it("ImmutableArrayに要素が存在する場合は、末尾要素を返す", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Last() == 9)
    });

    it("ImmutableArrayが空の場合は、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Last() })
    });
});

describe("ImmutableArray#Add", () => {
    it("引数にコレクションの要素が与えられた場合、コレクションの末尾に要素を追加する", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Add(10).Last() == 10);
    });

    it("引数にnullが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Add(null) });
    });

    it("引数にundefinedが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Add(undefined) });
    });
});

describe("ImmutableArray#Remove", () => {
    it("引数にコレクションの要素が与えられた場合、コレクションの要素を削除する", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Remove(10).Last() == 9);
    });

    it("コレクションに存在しない要素が与えられた場合、コレクションの要素は削除しない", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).Remove(10).IsEqual(new ImmutableArray([0,1,2,3,4,5,6,7,8,9])));
    });

    it("引数にnullが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Remove(null) });
    });

    it("引数にundefinedが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).Remove(undefined) });
    });
});

describe("ImmutableArray#RemoveByIndex", () => {
    it("引数にインデックスが与えられた場合、コレクションの要素を削除する", () => {
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).RemoveByIndex(9).Last() == 8);
    });

    it("コレクションに存在しないインデックスが与えられた場合、コレクションの要素は削除しない", () => {
        assert.throws(() => { new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).RemoveByIndex(11) });
    });

    it("引数にnullが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).RemoveByIndex(null) });
    });

    it("引数にundefinedが与えられた場合、ContractHelperErrorをスローする", () => {
        assert.throws(() => { new ImmutableArray(null).RemoveByIndex(undefined) });
    });

});

describe("ImmutableArray#RemoveAll", () => {
    it("RemoveAllすると、配列の要素数が0になる", () => {
        ;
        assert(new ImmutableArray([0,1,2,3,4,5,6,7,8,9]).RemoveAll().Length() == 0);
    })
});