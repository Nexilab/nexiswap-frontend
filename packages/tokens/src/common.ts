import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CASHUSD_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0x40831c05df5B929a86051715dC8226E2433BBe27',
  18,
  'CASHUSD',
  'Cash USD',
  'https://coins.nexi.technology/cashusd',
)

export const NEXIGEM_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0xFF03b0d2d8924df3A353c907F00AAB884E27fA07',
  18,
  'NEXIGEM',
  'Nexi Gem',
  'https://coins.nexi.technology/nexigem',
)

export const DIGIBNS_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0xFF03b0d2d8924df3A353c907F00AAB884E27fA07',
  18,
  'DIGIBNS',
  'Digital Bonus',
  'https://coins.nexi.technology/digibns',
)

export const CAKE_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0x89D78EC729FC12979D4128DEAE052412621AC540',
  18,
  'WCAKE',
  'Wrapped PancakeSwap Token',
  'https://wrappedtokens.nexi.technology/WCAKE',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0x50281A1B1dFAFaCF66492BA6E45E764A815FD829',
  18,
  'USDC',
  'Wrapped USD Coin',
  'https://wrappedtokens.nexi.technology/usdc',
)

export const DAI_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0xF64b0445629e87Bb59Ce019a8870ad4EC9F54F8F',
  18,
  'DAI',
  'Wrapped Dai Stablecoin',
  'https://wrappedtokens.nexi.technology/dai',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_NEXI = new ERC20Token(
  ChainId.BSC,
  '0xd922Ac06E37BdE3d9bCe02172Ff94D6BE294B917',
  18,
  'USDT',
  'Wrapped Tether USD',
  'https://wrappedtokens.nexi.technology/usdt',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0xDeaE7C2ABE5d4556906B66f61C5c1AC406D4Ea43',
  18,
  'BUSD',
  'Wrapped Binance USD',
  'https://wrappedtokens.nexi.technology/BUSD',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)



export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.NEXI]: BUSD_NEXI
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.NEXI]: CAKE_NEXI,
}

export const CASHUSD = {
  [ChainId.NEXI]: CASHUSD_NEXI,
}

export const NEXIGEM = {
  [ChainId.NEXI]: NEXIGEM_NEXI,
}

export const DIGIBNS = {
  [ChainId.NEXI]: DIGIBNS_NEXI,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.NEXI]: USDC_NEXI,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.NEXI]: USDT_NEXI,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const DAI = {
  [ChainId.NEXI]: DAI_NEXI,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
