import { rest } from 'msw';

const handlers = [
  rest.get('https://api.coingecko.com/api/v3/exchanges', (req, res, ctx) => res(ctx.status(200),
    ctx.json([{
      id: 'gdax',
      name: 'Coinbase Exchange',
      year_established: 2012,
      country: 'United States',
      description: '',
      url: 'https://www.coinbase.com',
      image: 'https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875',
      has_trading_incentive: false,
      trust_score: 10,
      trust_score_rank: 1,
      trade_volume_24h_btc: 70889.88907939584,
      trade_volume_24h_btc_normalized: 70889.88907939584,
    },
    {
      id: 'okex',
      name: 'OKX',
      year_established: 2017,
      country: 'Seychelles',
      description: '',
      url: 'https://www.okx.com',
      image: 'https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377',
      has_trading_incentive: false,
      trust_score: 10,
      trust_score_rank: 2,
      trade_volume_24h_btc: 82638.85106870126,
      trade_volume_24h_btc_normalized: 47797.879438246186,
    }]))),
];

export default handlers;
