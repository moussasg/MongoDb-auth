import React from "react";
import axios from "axios"; //bibliothèque JavaScript envoie les requette http au serveur
//UserForm classe React avec un état initial contient des propriétés pour stocker 
//le nom, l'e-mail et le mot de passe 
class UserForm extends React.Component {
constructor(props) { //constructeur initialise l'état de la classe avec un objet props et apelle React.compoenet
    super(props); 
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  } // handleSubmit
handleSubmit = (event) => {//tetactiva en cliquand sur submit de form au dessous
    event.preventDefault(); // 3001 = PORT
    /// name + email + password rahi fel form au dessous
    const { name, email, password } = this.state; /// comunikit react-node avec axios li yb3te request b lien node li howa http://localhost:4000
    axios.post('http://localhost:3001/api/users/', { name, email, password }) // hna n7aAT LIEN NODE__ li moraha standard/api/users/
      .then((response) => {
        console.log(response.data);
        // mettre à jour l'état local du composant après la soumission du formulaire
        this.setState({
          name: '',
          email: '',
          password: '',
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