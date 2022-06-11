import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "eevee",
      pokemon: "",
      err: ""
    }

  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = async () => {
    try {

      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${this.state.query.toLowerCase()}`)
      const data = await res.json()
      console.log(data)

      this.setState ({
        pokemon: data,
        err: null
      })

    }catch(err) {
      this.setState({
        pokemon: null,
        err
      })
    }
  }

  handlerChange = e => {
    this.setState ({
      query: e.target.value
    })
  }

  handlerSummit = e => {
    e.preventDefault()
    this.getPokemon()
  }

  render() {

    console.log(this.state.query)

    return (

      <form onSubmit={this.handlerSummit}>

      <h1>Pokemon Finder Application</h1>
      <input type="text" value={this.state.query} onChange={this.handlerChange} />
      <input type="submit" value="Search"/>
      <br />
      <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.state.pokemon.id}.png`} className='pokepic' alt=""/>
      <br/>
      <h2 className='pokename'> {this.state.pokemon.name} </h2>
      
      </form>
    )
  }


}

