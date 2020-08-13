no-api-key
A simple wrapper/module for my api, [no-api-key.com]('https://no-api-key.com')

```
const api = require('no-api-key');
```

```js
(async () => {
    const data = await api.color({
        color: 'red'
    })
    console.log(data) // url : https://api.no-api-key.com/image/color
})();
```