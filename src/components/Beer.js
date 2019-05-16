import React, { Component } from 'react';
import axios from 'axios';


class Beer extends Component {

  state = {
    beers: [],
    beer: {},
    randomBeer: {},
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(({data}) => {
        this.setState({
          beers: data,
        }, this.findMatchingBeer);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(({data}) => {
        this.setState({
          randomBeer: data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  findMatchingBeer = () => {
    const {beers} = this.state;
    const { id } = this.props.match.params;
    const beer = beers.find((beer) => {
      return beer._id === id;
    });
    this.setState({
      beer, 
    })
  }

  render() {
    const { beer, randomBeer } = this.state;
    const { id } = this.props.match.params;

    if(id) {
      return (
        <div className="beer-card">
         <img src={beer.image_url} alt="beer"></img>
          <div className="beer-description">
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed} <strong>{beer.attenuation_level}</strong></p>
            <p>{beer.description}</p>
            <p>Contributed by {beer.contributed_by}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="beer-card">
         <img src={randomBeer.image_url} alt="beer"></img>
          <div className="beer-description">
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed} <strong>{randomBeer.attenuation_level}</strong></p>
            <p>{randomBeer.description}</p>
            <p>Contributed by {randomBeer.contributed_by}</p>
          </div>
        </div>
      );
    }
  }
}

export default Beer;
