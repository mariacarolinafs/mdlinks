function mdLinks(path) {
    const fs = require('fs')
    const regex = /\[(.+?)\]\((http.?:\/\/[^\)]*)\)/g
    return new Promise((resolve, reject) => {
        fs.readFile(path , (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const str = data.toString()
                const matches = str.match(regex);
                const result = matches.map((el) => {
                    const arr = el.match(/\[(.+?)\]\((http.?:\/\/[^\)]*)\)/);
                    return {href: arr[2], text: arr[1]}
                });
                resolve(result);
            }
        });
    });
}

module.exports = mdLinks;