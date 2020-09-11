const { succeed, fail, repair } = require('./enhancer.js');
// test away!

describe("enhancer tests", () => {
    test("runs without errors", () => {
        expect(true).toBeTruthy();
    })
//repairs-----------------------------------------------------------------------
    it("repairs", () => {
        expect(repair({ name: "Weapon", enhancement: 10, })).toStrictEqual({
            name: "Weapon", 
            durability: 100,
            enhancement: 10,
        });
    });
//------------------------------------------------------------------------------

//success-----------------------------------------------------------------------
    it("is a success", () => {
        expect(succeed("Weapon", 15, 50)).toEqual({
            name: "Weapon",
            enhancement: 16,
            durability: 50
        })
    })
//-----------------------------------------------------------------------------

    it("has failed", () => {
        expect(
            fail({ name: "Mich", enhancement: 15, durability: 19 })
        ).toMatchObject({
            durability: 9,
        })
    })

})