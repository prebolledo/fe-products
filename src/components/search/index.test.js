import React from 'react';
import { render } from '@testing-library/react';
import Search from './index';
import { ProductsProvider } from '../../contexts/products';

test('Render Search', () => {
  const  products = render(
    <ProductsProvider>
      <Search />
    </ProductsProvider>
  );
  
  expect(products).toMatchSnapshot();
});
