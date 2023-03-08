import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemicalid: ''
    };
  }

  handleChemicalidChange = (event) => {
    this.setState({ chemicalid: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${this.state.chemicalid}`);
  };

  render() {
    return (
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">Chemical ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.chemicalid}
          onChange={this.handleChemicalidChange}
        />

        <button className="delete-button" type="submit">
          Delete Record
        </button>
        <Link to="/">
          <button className="back1" type="submit">Back</button>
        </Link>
      </form>
    );
  }
}

export default DeleteRecord;