import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ItemList from '../components/ItemList';
import store from '../redux/store';

describe('Item List', () => {
  test('ItemList component renders as expected', () => {
    render(<Provider store={store}><ItemList /></Provider>);
    const element = screen.getByPlaceholderText('Search exchanges');
    expect(element).toBeInTheDocument();
  });
});
