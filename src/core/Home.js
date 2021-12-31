import React, { useState, useEffect } from 'react';
import Navigation from '../layout/Navigation';
import { getVideogames } from './apiCore';
import Card from './Card';

const Home = () => {

  const [videogames, setVideogames] = useState([])

  const [error, setError] = useState(false);

  const loadVideoGames = () => {
    getVideogames().then(res => {
      if (res.error) {
        setError(res.error)
      } else {
        setVideogames(res.data);
      }
    })
  }

  useEffect(() => {
    loadVideoGames();
  }, [])

  return (
    <div>
      <Navigation/>
      <div className="container">
        <div className="row">
          {
            videogames.map((videogame, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                <Card videogame={videogame} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;