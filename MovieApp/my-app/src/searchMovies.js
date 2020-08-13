import React, { useState } from 'react';
import './App.css';

export default function SearchMovies() {

  // displaying movies
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");


    const url = `https://api.themoviedb.org/3/search/movie?api_key=6102e65f445b2e7ec9fd99db2c0178b4&language=en-US&query=${query}&page=1&include_adult=false`;

    try {

      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }

  }





  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query"> Movie Name</label>
      <input className="input" type="text" name="query"
        placeholder="i.e Love Jones"
        value={query} onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">Search</button>

    </form>
  )
}
