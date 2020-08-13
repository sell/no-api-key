const test = require('../index');

(async () => {
    const data = await test.color({
        color: 'red'
    })
    console.log(data)
})();