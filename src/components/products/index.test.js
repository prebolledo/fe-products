import React from 'react';
import { render } from '@testing-library/react';
import Products from './index';
import { ProductsProvider } from '../../contexts/products';

test('Render Products', () => {
  const  products = render(
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  );
  expect(products).toMatchSnapshot();
});
