import React, { Component } from 'react';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmission = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
  }

  render() {
    const { name, poster, comment } = this.state
    return (
      <div className="MovieForm">
        <h1>Submit a movie:</h1>
        <form onSubmit={this.handleFormSubmission}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Movie:</label>
              <input
                onChange={this.handleChange}
                id="name"
                value={name}
                name="name"
                type="text"
                placeholder="Enter a movie name"
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Poster:</label>
              <input
                onChange={this.handleChange}
                id="poster"
                value={poster}
                name="poster"
                type="text"
                placeholder="Enter poster URL"
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">Comment:</label>
              <textarea
                onChange={this.handleChange}
                id="comment"
                value={comment}
                name="comment"
                type="text"
                placeholder="What you thought of the movie?"
              />
            </div>
            <hr />
            <div className="form-data">
              <input
                className="submitBtn"
                value="Submit Movie"
                type="submit"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MovieForm;