import React, { Component } from 'react';
import MovieForm from './components/MovieForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedMovie: []
    };
  }

  addMovie = newMovie => {
    fetch('http://92.175.11.66:3001/api/quests/movies/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then(results => results.json())
      .then(movieId => {
        if (movieId.error) {
          alert(movieId.error);
        } else {
          alert(`Movie added with the ID ${movieId}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Error when adding movie!');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h2>React Inside®</h2>
        </header>
        <MovieForm onSubmitForm={this.addMovie} />
      </div>
    );
  }
}

export default App;
