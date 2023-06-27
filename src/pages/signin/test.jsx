import React , {useState} from 'react'
import axios from 'axios'
function Test() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [message , setMessage] = useState('')
    const handelsub = async (event) => {
     event.preventDefault();
     try { /// début try
    const response = await axios.get('http://localhost:3001/api/users/',{email,password})//bdelte hed la ligne 
    if (response.data.exists) {
        setMessage("L'utilisateur existe dans la base de données !");
      } else {
        setMessage("L'utilisateur n'existe pas dans la base de données !");
      }
    }//fin try
    catch(error) {
      console.error("Une erreur s'est produite lors de la vérification de l'utilisateur", error);
      setMessage("Erreur lors de la vérification de l'utilisateur");
    }
     }
     const handelchane =  (event) => {
        const {name ,value} = event.target /// name = email ou password / value=== email  ou password
        if (name === 'email') { // if name === email 
            setEmail(value) /// setemail tweli value de email
        } else if (name === 'password') { /// if name === password 
            setPassword(value)/// setpassword tweli value de password
        }
    }
return (
<div>
<form onSubmit={handelsub}>
email <input name='email' value={email} type='email' onChange={handelchane}></input>
password <input name='password' value={password} type='password' onChange={handelchane}></input>
</form>
</div>
)
}
export default Test;

