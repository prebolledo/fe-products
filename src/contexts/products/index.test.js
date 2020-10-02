import React from 'react';
import { render } from '@testing-library/react';
import {ProductsProvider} from './index';

test('Render ProductsProvider', () => {
  const  productsProvider = render(
      <ProductsProvider />
  );
  
  expect(productsProvider).toMatchSnapshot();
});
