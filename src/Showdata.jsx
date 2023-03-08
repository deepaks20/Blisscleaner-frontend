import { Link } from 'react-router-dom';
import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>chemicalid</th>
          <th>chemicalname</th>
          <th>chemicalprice</th>
          <th>quantity</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.chemicalid}>
            <td>{user.chemicalid}</td>
            <td>{user.chemicalname}</td>
            <td>{user.chemicalprice}</td>
            <td>{user.quantity}</td>
            <td>{user.rating}</td>
          </tr>
        ))}
      </tbody>
      <Link to="/">
          <button className="back1" type="submit">Back</button>
        </Link>
          <Link to="/Update">
          <button className="next1" type="submit">Next</button>
        </Link>
    </table>
    );
  }}
  
export default Showdata;