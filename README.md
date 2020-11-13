# No-Api-Key Wrapper

https://no-api-key.com

# USAGE

```js
const { Api } = require("no-api-key");

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

    const timeout = await api.timeout();
    console.log(timeout)

})();

```

# Examples

var.animals() options
<ul>
    <li>var.animals('dog')</li>
    <li>var.animals('cat')</li>
    <li>var.animals('bear')</li>
    <li>var.animals('panda')</li>
</ul>

image options

<ul>
    <li>var.timeout()</li>
    <li>var.blueify()</li>
    <li>var.invert()</li>
    <li>var.darken()</li>
    <li>var.purplify()</li>
    <li>var.shoot()</li>
    <li>var.smrt()</li>
    <li>var.trash()</li>
</ul>

var.other() options

<ul>
    <li>var.other('memes')</li>
    <li>var.other('magic8ball')</li>
    <li>var.other('hug')</li>
    <li>var.other('kiss')</li>
    <li>var.other('quotes')</li>
    <li>var.other('riddle')</li>
    <li>var.other('facts')</li>
    <li>var.other('car')</li>
    <li>var.other('coin-flip')</li>
</ul>

More Routes

<ul>
   <li>var.password()</li>
   <li>var.textBinary(['no', 'api', 'key']);</li>
   <li>var.flipText(['no', 'api', 'key']);</li>
   <li>var.binaryText(['01101010', '01101111', '01100101', '00100000', '01100010', '01101001', '01100100', '01100101', '01101110']);</li>
</ul>
