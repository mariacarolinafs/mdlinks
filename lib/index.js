function mdLinks() {
    const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;
    const str = `aaaaaa
    bbbbbb
    [github](https://github.com)
    [whatsapp](https://web.whatsapp.com) lalalalalla
    biubiubiu `;
    let m;
    let arr = [];

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });

        arr.push({ href: m[2], text: m[1] })
    }
    console.log(arr)
}

mdLinks();