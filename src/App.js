import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super()
    this.nextPoke = this.nextPoke.bind(this);

    this.state = {
      click: 0,
    }
  }

  nextPoke() {
    this.setState(actual => ({
      click: actual.click >= pokemons.length - 1 ? 0 : actual.click + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={pokemons[this.state.click]} />
        <button onClick={ this.nextPoke }>Próximo {this.state.click}</button>
        <button style={{backgroundColor:'red', color: 'white'}}>Fire</button>
        <button style={{backgroundColor:'blue', color: 'white'}}>Psychic</button>
      </div>
    );
  }
}
export default App;