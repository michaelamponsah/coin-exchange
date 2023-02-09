import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../pages/Details';
import store from '../redux/store';

it('Details component renders as expected', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
