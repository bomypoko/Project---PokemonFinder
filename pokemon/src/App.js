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

  render() {
    return (
      
      
      <form>

      <h1>Pokemon Finder Application</h1>

      </form>
    )
  }


}

