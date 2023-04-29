import React from "react";
import classes from "./index.module.css"
import { useParams } from "react-router-dom"; // hooks de react pour récupérré id de cst dans url
import { MesSmartphones } from "../../constant/toutemarque" // notre cst
function Card() { //Card li tafichi les produits meditelha props : notre cst f app.jsx
  const { id } = useParams(); //  id jebto m cst MesSmartphones
  const FindId = MesSmartphones.find((el) => el.id.toString() === id);
  // FindId yjib id de cst 
  return (
    <div> {/*produits jbto m cst c les produits de marque a afiché */}
        {FindId.produits.map((el, i) => ( // produits = array de t tles marque a afiché
          <div key={i}> 
          <h1> {el.marque} </h1>
          <table className={classes.table}>
          <tr>
           <td><h1>{el.nom}</h1></td>
           </tr>
           <tr>
            <td><img src={el.imgp}/> </td>
           </tr>
           <div className={classes.carprix}>
           <tr>
            <td> <h1>{el.caractér} </h1></td>
           </tr>
           <tr>
            <td> <h1> Prix :  
              {el.prix}  </h1></td>
           </tr>
          </div>
            </table>
          </div>
        ))}
    </div>
  );
}
export default Card;