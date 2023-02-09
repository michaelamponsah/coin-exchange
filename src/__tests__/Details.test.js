import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import Details from '../pages/Details';
import store from '../redux/store';

const testData = {
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
  trade_volume_24h_btc: 75483.15345614518,
  trade_volume_24h_btc_normalized: 75483.15345614518,
};

it('Details component renders as expected', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <LocalStorageMock items={{ details: JSON.stringify(testData) }}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </LocalStorageMock>
    </Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
