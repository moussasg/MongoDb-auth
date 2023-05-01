import React from "react";
import axios from "axios";
class UserForm extends React.Component {
  constructor(props) { // get 3ando param yjo f lien 
    super(props); // post param + y9bl body 
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state; /// comunikit react-node avec lien node li howa http://localhost:4000
    axios.post('http://localhost:3001/api/users/', { name, email, password }) // hna n7aAT LIEN NODE__ li moraha standard/api/users/
      .then((response) => {
        console.log(response.data);
        // mettre à jour l'état local du composant après la soumission du formulaire
        this.setState({
          name: '',
          email: '',
          password: ''
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default UserForm