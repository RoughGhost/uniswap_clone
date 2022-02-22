require('@nomiclabs/hardhat-waffle')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/5vFuZKTjb_62RCndpm-O8L9y3vIzQH9m',
      accounts: [
        'b0e7a3766e04ba45760510cca172a8fa70d06592ab1db6b00d25762137521bb1',
      ],
    },
  },
}
