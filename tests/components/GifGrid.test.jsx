import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Esto sirve para hacer un mock de mis propias librerías
// y de librerías de terceros
// Con la siguiente línea le estamos diciendo que haga un mock
// completo de este path
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Puch';

    test('debe de mostrar el loading inicialmente', () => { 

        // Vamos a simular lo que está regresando esa función
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        //screen.debug();
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
     });

     test('debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs', () => { 

        // Información inventada que se supone va a regresar la llamada al API
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '23',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        // Vamos a simular lo que está regresando esa función
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } /> );

        //screen.debug();

        // Como se están esperando más de uno se utiliza el getAllByRole
        expect ( screen.getAllByRole('img').length ).toBe(2);
      });
 });