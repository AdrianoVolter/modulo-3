import {render, screen} from '@testing-library/react';  
import Rota2 from './index.jsx';

describe('Teste do componente Rota2', () => {
    test('Renderize sem problemas', () => {
        render(<Rota2 />);
        const linkElement = screen.getByText('Rota 2');

        expect(linkElement).toBeInTheDocument();
    });
}
);