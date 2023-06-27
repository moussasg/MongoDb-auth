import React , { useState } from 'react';
import axios from 'axios';
function SignIn() {
  const [email , setEmail] = useState(''); // email ykone vide aprés drto f value de input de email / value={email}
  const [password , setPassword] = useState('');//password ykone vide aprés drto f value de input de password / value={password}
  const [message , setMessage] = useState('');//message ykone vide aprés yetaficha avant le form
  const handleSubmit = async (event) => { //lazm const psq ni dayerha sans this de classe react rani fel fucntion
    event.preventDefault()
    try { // 1/try{} , 2/catch(error){}
      const response = await axios.get('http://localhost:3001/api/users/', { // get psq signin , nvérifi si'il existe
        params:{ // params fixe prédifinie de react  je vais essayer de les mettre aprés virgule au dessus
          email,
          password,
        },
      });
      if (response.data.exists) {
        setMessage("L'utilisateur existe dans la base de données !");
      } else {
        setMessage("L'utilisateur n'existe pas dans la base de données !");
      }
    } // fin de try
     catch (error) {
      console.error("Une erreur s'est produite lors de la vérification de l'utilisateur", error);
      setMessage("Erreur lors de la vérification de l'utilisateur");
    }
  }; // fin de handelsubmit
  const handleInputChange = (event) => {
    const { name , value } = event.target; //[value = email + password] li drthom f useStete lfo9a
    if (name  === 'email') { // IF email === 'email' 
      setEmail(value); // setemail yweli value de {email} 
    } else if (name  === 'password') { //iF password === 'password'
      setPassword(value); //  setPassword yweli value de {pasword}
    }
  }
  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <p>Signin</p>
        <h1>Email:</h1>
        <input type="email" name ="email" value={email} onChange={handleInputChange} />
        <h1>Password:</h1>
        <input type="password" name ="password" value={password} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignIn;
