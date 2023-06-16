import React from "react"; // js framework=ensemble de bibiliothéque(des modules=ens de fonctionalité) meilleure pour  manipulation du virtual DOM (mettre a jour qu'une partie de intérface user)
import axios from "axios"; // bibliothèque JavaScript envoie les requette http au serveur 
//et bodyparser li ktbto f express.js , y'récupérer les données envoyées dans le corps d'une requête HTTP ( ensmbl de données ) et le transformer en objet , on vas comuniki react-node avec axios li yb3te request b lien node
class UserForm extends React.Component{ //UserForm classe React avec un état initial contient des propriétés pour stocker 
//UserForm stocke le l'e-mail et le mot de passe
constructor(props) { // constructeur initialise l'état de la classe avec un objet {props} 
    super(props); // super appelle le constructeur de la classe parent
    this.state = { // pour initialiser l'état du composant 
      email: '' ,
      password: '',
    };
  } // handelsubmit lzmlha async
handleSubmit = async (event) => {//tetactiva en cliquand sur submit de form au 'dessous'
event.preventDefault(); // pour que la page ne reload pas
//password + email rahi fel form au dessous
const { email, password } = this.state; /// comunikit react-node avec axios li yb3te request b lien node li howa http://localhost:3002
axios.post('http://localhost:5000/api/accounts/', { email, password } ) // hna n7aAT LIEN NODE 3002 port node  'api' fixe /api/ana semitha 'users' n9der nbdlha / lazm meme f express.js tredha api/users
    ///pour effectuer des requêtes AJAX asynchrones depuis une page web vers un serveur ( effectuées avec JavaScript et le format de données peut être XML, JSON, HTML ou tout autre format.)
        this.setState({ //mise à jour du composant marche sur react.componenet accepte un nouvel objet d'état en argument
          email: '',
          password: '',
        });
  };
  //////
  handleInputChange = (event) => { // ni dayerha fel onchage t3 les 2 inputs
// name et value c des const nutiliwziwhom f input au dessous
    const { name , value } = event.target; // name=[email+password] /§ ntargiti value de email+password ni dayrha fel form au dessous
    this.setState({ [name] : value }); //name=[email+password] ytremplaca avec value de [email+password] yweli: value de email+password
  }
  ////////
  render() {
    return (
      <div>
  <form onSubmit={this.handleSubmit}> {/*this pour accédé aux propriété de cette classe*/ }
  <label>
    Email: {/* this.state pour initialiser l'état du composant  */}
    <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
</label>
  <label>
    Password: {/* this.state pour initialiser l'état du composant  */}
    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
  </label>
  <button type="submit">Submit</button> 
  </form>
      </div>
    );
  }
} //// hna ylhlasse class UserForm
export default UserForm