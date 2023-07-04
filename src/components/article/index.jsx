import React, { useState } from "react";
import classes from "./index.module.css";
import { useParams } from "react-router-dom";
import { MesSmartphones } from "../../constant/toutemarque";

function Card() {
  const { id } = useParams();
  const FindId = MesSmartphones.find((el) => el.id.toString() === id);
  const [selectram, setselectram] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectgb, setselectgb] = useState("");
  const [panier, setpanier] = useState("");
  const [quantité, setquantité] = useState(1);
  const [prix, setprix] = useState(0);
  const renderSmartphones = () => {
    const filteredSmartphones = FindId.produits.filter((el) => {
      if (selectram && selectgb && selectedModel) {
        return el.ram === selectram && el.nom === selectedModel && el.gb === selectgb;
      } else if (selectram && selectgb) {
        return el.ram === selectram && el.gb === selectgb;
      } else if (selectram && selectedModel) {
        return el.ram === selectram && el.nom === selectedModel;
      } else if (selectedModel && selectgb) {
        return el.nom === selectedModel && el.gb === selectgb;
      } else if (selectram) {
        return el.ram === selectram;
      } else if (selectedModel) {
        return el.nom === selectedModel;
      } else if (selectgb) {
        return el.gb === selectgb;
      } else {
        return true;
      }
    });

    if (filteredSmartphones.length === 0) {
      return <h2>Il n'existe pas de modèle correspondant aux filtres sélectionnés.</h2>;
    }
    const moins = () => {
      quantité > 1 ? setquantité(quantité-1) : setquantité(1)
    }
    const plus = () => {
      quantité > 0 ? setquantité(quantité+1) : setquantité(1)
    }
    return (
      <div className={classes.tout}>
        {filteredSmartphones.map((el, i) => (
          <div key={i} className={classes.xiaomi}>
            <div className={classes.marque}>
            <h1>{el.marque}</h1>
            </div>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td>
                    <h1>{el.nom}</h1>
                    <h1>Mon panier: {panier}</h1>
                    Quantité: {quantité}
                    <h3> Prix: {prix}</h3>
                    <div className={classes.nbrprod}>{el.Ajouté}</div>
                    <button onClick={() => plus(el.prix)}>+</button>
                    <button onClick={() => moins(el.prix)}>-</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={el.imgp} alt={el.nom} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>{el.caractér} / {el.gb} Stockage</h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>Prix : {el.prix}</h1>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="filtre">
        <div className={classes.adroite}>
          <br />
        </div>
        <p>filtré par</p>
      </div>
      <select value={selectram} onChange={(e) => setselectram(e.target.value)}>
        <option value="">RAM</option>
        {[...new Set(FindId.produits.map((el) => el.ram))].map((ram) => (
          <option key={ram} value={ram}>{ram}</option>
        ))}
      </select>
      <select value={selectgb} onChange={(e) => setselectgb(e.target.value)}>
        <option value="">Stockage</option>
        {[...new Set(FindId.produits.map((el) => el.gb))].map((gb) => (
          <option key={gb} value={gb}>{gb}</option>
        ))}
      </select>
      <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
        <option value="">Modèle</option>
        {[...new Set(FindId.produits.map((el) => el.nom))].map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
      {renderSmartphones()}
    </>
  );
}

export default Card;
