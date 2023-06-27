import React, { useState } from "react";
import classes from "./index.module.css";
import { useParams } from "react-router-dom";
import { MesSmartphones } from "../../constant/toutemarque";
function Card() {
  const { id } = useParams();
  const FindId = MesSmartphones.find((el) => el.id.toString() === id);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const renderSmartphones = () => {
    const filteredSmartphones = selectedCategory
      ? FindId.produits.filter((produit) => produit.ram === selectedCategory)
      : FindId.produits;
    return filteredSmartphones.map((produit, i) => (
      <div key={i}>
        <h1>{produit.marque}</h1>
        <table className={classes.table}>
          <tr>
            <td>
              <h1>{produit.nom}</h1>
            </td>
          </tr>
          <tr>
            <td>
              <img src={produit.imgp} />
            </td>
          </tr>
          <div className={classes.carprix}>
            <tr>
              <td>
                <h1>{produit.caractér}</h1>
              </td>
            </tr>
            <tr>
              <td>
                <h1>Prix : {produit.prix}</h1>
              </td>
            </tr>
          </div>
        </table>
      </div>
    ));
  };
  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">RAM</option>
        {[...new Set(FindId.produits.map((produit) => produit.ram))].map(
          (ram) => (
            <option key={ram} value={ram}>
              {ram}
            </option>
          )
        )}
      </select>
      {renderSmartphones()}
    </div>
  );
}
export default Card;
