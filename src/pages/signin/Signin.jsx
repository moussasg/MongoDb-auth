import React, { useState } from 'react';
import axios from 'axios';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/api/users/', {
        params: {
          email,
          password,
        },
      });

      if (response.data.exists) {
        setMessage("L'utilisateur existe dans la base de données !");
      } else {
        setMessage("L'utilisateur n'existe pas dans la base de données !");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la vérification de l'utilisateur", error);
      setMessage("Erreur lors de la vérification de l'utilisateur");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <p>Signin</p>
        <h1>Email:</h1>
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        <h1>Password:</h1>
        <input type="password" name="password" value={password} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
