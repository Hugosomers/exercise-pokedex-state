import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super()
    this.nextPoke = this.nextPoke.bind(this);
    this.selectElementPoke = this.selectElementPoke.bind(this);

    this.state = {
      click: 0,
      pokemons: pokemons.filter(pokemon => pokemon.type === 'Fire'),
    }
  }

  nextPoke() {
    this.setState(actual => ({
      click: actual.click >= this.state.pokemons.length - 1 ? 0 : actual.click + 1,
    }));
  }

  selectElementPoke(tipo) {
    const element = pokemons.filter(pokemon => pokemon.type === tipo);
    this.setState({
      click: 0,
      pokemons: element,
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={this.state.pokemons[this.state.click]} />
        <button onClick={this.nextPoke}>Próximo {this.state.click}</button>
        <button style={{backgroundColor:'red', color: 'white'}} onClick={() => this.selectElementPoke('Fire')}>Fire</button>
        <button style={{backgroundColor:'blue', color: 'white'}} onClick={() => this.selectElementPoke('Psychic')}>Psychic</button>
      </div>
    );
  }
}
export default App;