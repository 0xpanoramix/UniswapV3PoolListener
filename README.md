# UniswapV3PoolListener

A simple listener for uniswap v3 pool.

## Run

You can listen for events of the contract deployed at the address specified in the `listener.js` file.

```js
const UniswapV3PoolAddress = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8";
```

You can change the event you want to listen to by updating the event name like this :

```js
contract.events.Swap()
    .on('data', async function(event){
        console.log(event.returnValues);
    })
    .on('error', console.error);

// Becomes

contract.events.Collect()
    .on('data', async function(event){
        console.log(event.returnValues);
    })
    .on('error', console.error);
```

Just put your ethereum node enpoint in the **.envrc** file.

```shell

    npm install && npm run start

```

And wait for events to come !
