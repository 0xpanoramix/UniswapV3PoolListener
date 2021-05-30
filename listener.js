const { get } = require("env-var");

const env = (key, required = true) => get(key).required(required);

const UniswapV3CorePool = require('./UniswapV3Pool.json');
const UniswapV3PoolAddress = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8";

const Web3 = require("web3");
const provider = env("NODE_ENDPOINT").asString();
const web3Provider = new Web3.providers.WebsocketProvider(provider);
const web3 = new Web3(web3Provider);

const contract = new web3.eth.Contract(UniswapV3CorePool.abi, UniswapV3PoolAddress);

contract.events.Swap()
    .on('data', async function(event){
        console.log(event.returnValues);
    })
    .on('error', console.error);