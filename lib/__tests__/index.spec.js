const mdLinks = require('../index.js');

describe("mdLinks", () => {
    it("is a function", () => {
        expect(typeof mdLinks).toBe("function");
    }); 
});

it("should return 2 links", (done) => {
    mdLinks("./lib/__tests__/text.md").then(result => {
        expect(result.length).toEqual(2);
        expect(result[0].text).toEqual('Node.js')
        expect(result[0].href).toEqual('https://nodejs.org/')
        done();
    })
})

it("return error", (done) => {
    mdLinks("./lib/__tests__/tex.md").catch(result => {
        console.log(result);
        expect(result.errno).toEqual(-2);
        done();
    })
})

it("return error", (done) => {
    mdLinks("./lib/__tests__/minion.jpg").catch(result => {
        console.log(result);
        expect(result.message).toEqual("Cannot read property 'map' of null");
        done();
    })
})
