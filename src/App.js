import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './button'

class App extends React.Component {
  constructor() {
    super()
    this.nextPoke = this.nextPoke.bind(this);
    this.selectElementPoke = this.selectElementPoke.bind(this);
    this.selectAllPoke = this.selectAllPoke.bind(this);

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

  selectAllPoke() {
    this.setState({
      click: 0,
      pokemons: pokemons,
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={this.state.pokemons[this.state.click]} />
        <Button event={this.nextPoke} text={'Próximo'}/>
        <Button event={() => this.selectElementPoke('Fire')} text={'Fire'}/>
        <Button event={() => this.selectElementPoke('Psychic')} text={'Psychic'}/>
        <Button event={this.selectAllPoke} text={'All'}/>
        
      </div>
    );
  }
}
export default App;