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

  generateButtons() {
    const types = pokemons.map(pokemon => pokemon.type);
    console.log(types);
    const noRepeat = types.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

   return noRepeat;
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={this.state.pokemons[this.state.click]} />
        <Button event={this.nextPoke} text={'Próximo'} disable={this.state.pokemons.length === 1} className={'next'} />
        {/* <Button event={() => this.selectElementPoke('Fire')} text={'Fire'}/>
        <Button event={() => this.selectElementPoke('Psychic')} text={'Psychic'}/> */}
        <Button event={this.selectAllPoke} text={'All'}/>
        {this.generateButtons().map(element => <Button event={() => this.selectElementPoke(element)} text={element}/>)}
      </div>
    );
  }
}
export default App;