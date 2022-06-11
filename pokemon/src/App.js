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

      <> 

      <div className='main-div'> 

      <form onSubmit={this.handlerSummit}>
      <h3>Pokemon Finder Application</h3>
      <input type="text" value={this.state.query} onChange={this.handlerChange} />
      <input type="submit" value="Search"/>
      </form>

      {this.state.pokemon && !this.state.err ? (

        <div className='pokemon-pic'> 
            <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.state.pokemon.id}.png`} className='pokepic' alt=""/>
            <h2 className='pokemon-name-title'>{this.state.pokemon.name}</h2>

            <h5> Weight {this.state.pokemon.weight}</h5>

            <ul>
              {this.state.pokemon.abilities.map(abil => (
                <li> {abil.ability.name} </li>
              ))}
            </ul>
          
        </div>

      ) : (

            <div className='error'> 
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/1024px-Nuvola_apps_error.svg.png" className='pokeerr' alt=""/>
              <h2> Woops! could't find that pokemon </h2>
            </div>

      )}
      </div>
      </>
    )
  }
}

