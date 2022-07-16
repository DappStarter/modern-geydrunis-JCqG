require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue recipe nominee clutch include problem olympic trade'; 
let testAccounts = [
"0xe999bf1399825db22d2bd7e78967acf7ab618ccb29e0e86f8db57c533d1c7a53",
"0x66fc2bcafa0f2869b09ae7363883e206a3129acc7f1b9b7538c6c228148384d2",
"0x3f00f8e2f57943a3fe8b89773d7c9960b1015dedc2c37efd867b24137811ec2f",
"0xc7a9bff930dee7a6b2120f19906f6e55ee68bf74a69360f996effe7efe90973a",
"0x9c0622d9325afd0d5b7834958a1953adcdb9ef64704c32423b1650083f692e09",
"0x65e9434264e70acab17093a28c6bca0d3420ba55f5b345db3d4a1c61840d053f",
"0x8c60c7ee653ddf6ebeb7e16a79db8413c3ba96824e6c6560da857476fb8587d7",
"0x3dfb0a436e79efc1862aa0d7f376f7683aadb535e1659c3edc04d4e005c76ee7",
"0x0c8725e5d0d914a085e79a366eab65650b55ecfad19dafa741594eaf4602c4a0",
"0x1183c229eb32b32158ffe24e93c49bb77f4c496c7e67e11dc7506b7abd48a405"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

