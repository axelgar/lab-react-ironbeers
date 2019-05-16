import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class BeerList extends Component {

  state = {
    beers: [],
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(({data}) => {
        this.setState({
          beers: data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        {beers.map((beer) => {
          return (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div className="beer-card">
              <img src={beer.image_url} alt="beer"></img>
              <div className="beer-description">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Contributed by {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    )
  }
}

export default BeerList;
