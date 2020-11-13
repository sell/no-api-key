const { Api } = require("../index");

const api = new Api('https://cdn.discordapp.com/avatars/185957154606284800/a_e0d990a735879011ec376382296b0ec6.png')

;(async () => {
    const dog = await api.animals('dog');
    console.log(dog);

    const other = await api.other('coin-flip')
    console.log(other);

    const binaryText = await api.textBinary(['no', 'api', 'key']);
    console.log(binaryText);

    const password = await api.password();
    console.log(password);

    const blueify = await api.blueify();
    console.log(blueify)
})();
