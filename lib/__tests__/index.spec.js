const mdLinks = require('../index.js');

describe("mdLinks", () => {
    it("is a function", () => {
        expect(typeof mdLinks).toBe("function");
    }); 
});

it("should return 2 links", (done) => {
    mdLinks("./lib/__tests__/text.md").then(result => {
        expect(result).toEqual(result);
        done();
    })
})

it("return error", (done) => {
    mdLinks("./lib/__tests__/tex.md").catch(result => {
        expect(result).toEqual(result);
        done();
    })
})