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

        // jest.fn Creates a mock function. Optionally takes a mock implementation.
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        // Comprueba que la función onNewCategory ha sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        // Comprueba que la función onNewCategory ha sido llamada solo 1 vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // Comprueba que la función onNewCategory ha sido llamada con el valor de inputValue
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
      });

      test('no debe de llamar el onNewCategory si el input está vacio', () => { 
        // jest.fn Creates a mock function. Optionally takes a mock implementation.
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        //screen.debug();

        // Comprueba que la función onNewCategory ha sido llamada 0 veces
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        // Comprueba que la función onNewCategory no haya sido llamada
        expect( onNewCategory ).not.toHaveBeenCalled();
       });
 });