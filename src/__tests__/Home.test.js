import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../redux/store';

test('Home component renders as expected', () => {
  render(<Provider store={store}><Home /></Provider>);
  const element = screen.getByPlaceholderText('Search exchanges');
  expect(element).toBeInTheDocument();
});
