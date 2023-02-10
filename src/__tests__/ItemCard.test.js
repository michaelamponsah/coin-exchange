import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

test('ItemCard renders successfully', () => {
  render(
    <BrowserRouter>
      <ItemCard id="test" image="test" name="test" rank={12} />
    </BrowserRouter>,
  );
  const element = screen.getByText(/Rating:/i);
  expect(element).toBeInTheDocument();
});
