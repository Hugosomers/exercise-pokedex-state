import React from 'react';
import Pokemon from './Pokemon';
import './pokemon.css';

class Pokedex extends React.Component {
    render() {
        const pokemons = this.props.pokemon
        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemons} />
            </div>
        );
    }
}

export default Pokedex;