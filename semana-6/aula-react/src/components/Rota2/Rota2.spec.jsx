import React from 'react';
import { render } from '@testing-library/react';
import Rota2 from './index.jsx';

test('Renderiza o componente Rota3 corretamente', () => {
  const { getByText } = render(<Rota2 />);
  const rota3Element = getByText('Rota 2');

  expect(rota3Element).toBeInTheDocument();
});
