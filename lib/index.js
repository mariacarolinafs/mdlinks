// const str = "Uma comunidade open source nos propôs criar uma ferramenta, usando [Node.js](https://nodejs.org/), que leia e analise arquivos no formato [Node.js](http://nodejs.org/), que leia e analise arquivos no formato links e mostrar algumas"

// const regexGlobal = str.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/g);
// const regex = str.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/);

// console.log('globalllll', regexGlobal)
// console.log('regexxxx', regex[2])

// const xu = regexGlobal.map(reg => {
//     const xuxu = reg.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/);
//     return {seila: xuxu[2], outro: xuxu[1] }
// })

// console.log(xu)


// function mdLinks() {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs')
//         const regex = (/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/g);
//         fs.readFile(path, (err, data) => {
//             console.log(data);
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 const result = data.match(regex)
//                 const matches = result.map(reg => {
//                     const match = reg.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/);
//                     return { href: match[1], text: match[2] }
//                 })
//             }

//             resolve(match);
//         });
//     });
// }

// mdLinks();
// module.exports = mdLinks;

function mdLinks(path) {
    const fs = require('fs')
    const regex = /\[(.*?)\]+|(https?:\/\/[^\s][^)]+)/g;
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const str = data.toString()
                const matches = str.match(regex);
                const result = matches.map((el) => {
                    const arr = el.slice('/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/');
                    return arr
                });
                resolve(result);
            }
        });
    });
}

mdLinks()
module.exports = mdLinks;