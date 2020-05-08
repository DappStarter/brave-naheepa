require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski street cost pave protect idea another army gather'; 
let testAccounts = [
"0xb2e8c7a57956aaac4af9c216793bb6753bd2f574b564f6719e5ff8c47c80e38f",
"0xe9d4413733da17d4b79dd7ce8e6d5b87f63ae71e853321fa59ecf9b9d0425980",
"0x2fc0d1a911f1ca643f16eb15aae3de17f40319bafc2d6764f7b9f9ed850ae9f9",
"0x5ebf38fb1134108ec942962251cfa0f6f7948d3554db3f54d35b3ddd75f39a18",
"0xda6bdd2a89dfd9cfc10de695bfc485ebee5cb21ed68593586ec4ada3af03b126",
"0x002434da80d150f5fe7a33adadf5e94211a32e4aedc662b7953f5a763bfca963",
"0x858128c4af18da753192cd3cc454616410804945aa490ab43b8d1be1b9b3dc6a",
"0x998fe452a3a4a6f3ba9a2c197ef7207a95ea81192687f98d04b1a488b938839d",
"0x1f4d08ea93a0ed2c14a8dbdbca272bc5bfc0ece74a683908345584b5efb7c2b6",
"0x4926960e80d37fbf52b4ebbfb41827bfc9da1a0f38b6052ca7a31bc4bb8a633f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
