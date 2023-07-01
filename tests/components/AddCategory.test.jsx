import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

    const inputValue = 'Saitama';

    test('debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue } } );
        expect( input.value ).toBe(inputValue);

        //console.log(input);
        //screen.debug();
     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        render( <AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');
      });
 });