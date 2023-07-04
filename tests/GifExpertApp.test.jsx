
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";



describe('Prueba en <GifExpertApp />', () => { 

    test('should Add new categories', () => { 
        // Arrange
        const inputValue = 'Soldiers Amulet';

        // Act
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: {value: inputValue } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: inputValue + ' Prime' }}); 
        fireEvent.submit(form);

        // Assert
        //expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2);
     });

    test('debe aparece el texto GifExpertApp', () => { 
        render( <GifExpertApp />);
        //screen.debug();
        expect(screen.getByText('GifExpertApp'));
     });

     test('no debe de añadir dos categorias iguales, distinguiendo mayusculas de minusculas', () => { 
        render(<GifExpertApp/>)
 
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
 
        //fireEvent.input(input, {target: { value: 'Saitama'}})
        //fireEvent.submit(form)
 
        //fireEvent.input(input, {target: { value: 'saitama'}})
        //fireEvent.submit(form)
 
        //expect(screen.queryByText('saitama')).toBeFalsy();
 
     });

     test('No agregar una categoría si ya existe.', () => {
 
        render( <GifExpertApp /> );
        // screen.debug();
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
 
        fireEvent.input( input, { target : { value : 'One Punch Man' } } );
        fireEvent.submit( form );
        // screen.debug();
        //expect( screen.getAllByRole('heading', { level : 3 }).length ).toBe(1);
 
    });
 });