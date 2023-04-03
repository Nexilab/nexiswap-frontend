import { ChainId, WNEXI, ERC20Token } from '@pancakeswap/sdk'
import { USDC, CAKE, BUSD, DAI, USDT, CASHUSD, NEXIGEM, DIGIBNS} from './common'

export const nexiTokens = {
  wnexi: WNEXI[ChainId.NEXI],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  nexi: new ERC20Token(
    ChainId.NEXI,
    '0x9F65526369610fD05d55fdCf4c42AFf412319D6f',
    18,
    'NEXI',
    'NEXI',
    'https://www.nexi.technology/',
  ),
  cashusd: CASHUSD[ChainId.NEXI],
  nexigem: NEXIGEM[ChainId.NEXI],
  digibns: DIGIBNS[ChainId.NEXI],
  cake: CAKE[ChainId.NEXI],
  busd: BUSD[ChainId.NEXI],
  dai: DAI[ChainId.NEXI],
  usdt: USDT[ChainId.NEXI],
  eth: new ERC20Token(
    ChainId.NEXI,
    '0x2404895b25547e6aB5D6C8b1D05D969bd3319AB3',
    18,
    'ETH',
    'Wrapped Ethereum Token',
    'https://ethereum.org/en/',
  ),
  bnb: new ERC20Token(
    ChainId.NEXI,
    '0xF10C5cDceDC903D1cEdA8b6e6266516fb5a75f17',
    18,
    'BNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  doge: new ERC20Token(
    ChainId.NEXI,
    '0x49c430915Bf8521f540E6Be99e869952Ab785EB3',
    8,
    'DOGE',
    'Wrapped Dogecoin',
    'https://dogecoin.com/',
  ),
  btc: new ERC20Token(
    ChainId.NEXI,
    '0x33a3D3E0504b09A458F3514ADDa01d5145eBDFfe',
    8,
    'BTC',
    'Wrapped BTC',
    'https://bitcoin.org/',
  ),
  ada: new ERC20Token(
    ChainId.NEXI,
    '0x00B30fAcEF4965695691E1d91D295b861396BaAE',
    18,
    'ADA',
    'Wrapped Cardano Token',
    'https://www.cardano.org/',
  ),
  usdc: USDC[ChainId.NEXI],
}
