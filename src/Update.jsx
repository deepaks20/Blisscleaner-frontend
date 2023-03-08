import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemicalid: '',
      chemicalname: '',
      chemicalprice: '',
      quantity: '',
      rating: ''
    };
  }

  handleChemicalIdChange = (event) => {
    this.setState({ chemicalid: event.target.value });
  };

  handleChemicalNameChange = (event) => {
    this.setState({ chemicalname: event.target.value });
  };

  handleChemicalPriceChange = (event) => {
    this.setState({ chemicalprice: event.target.value });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      chemicalid: this.state.chemicalid,
      chemicalname: this.state.chemicalname,
      chemicalprice: this.state.chemicalprice,
      quantity: this.state.quantity,
      rating: this.state.rating
    };

    axios.put('http://127.0.0.1:8080/updateDetails', data);
  };

  render() {
    return (
      

      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Chemical ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.chemicalid}
          onChange={this.handleChemicalIdChange}
        />

        <label className="sign-label">Chemical Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.chemicalname}
          onChange={this.handleChemicalNameChange}
        />

        <label className="sign-label">Chemical Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.chemicalprice}
          onChange={this.handleChemicalPriceChange}
        />

        <label className="sign-label">Quantity</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
        />

        <label className="sign-label">Rating</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.rating}
          onChange={this.handleRatingChange}
        />

        <button className="login-button" type="submit">
          Update
        </button>
        <Link to="/DeleteRecord">
          <button className="next1" type="submit">Next</button>
        </Link>
      </form>
      
    );
  }
}

export default Update;