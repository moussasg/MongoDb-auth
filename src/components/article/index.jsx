import React, { useState } from "react";
import classes from "./index.module.css";
import { useParams } from "react-router-dom";
import { MesSmartphones } from "../../constant/toutemarque";
function Card() {
  const { id } = useParams();
  const FindId = MesSmartphones.find((el) => el.id.toString() === id);
  const [selectram, setselectram] = useState(""); // pour les RAM
  const [selectedModel, setSelectedModel] = useState(""); // pour les noms de modéles
  const renderSmartphones = () => { // prend tout le code avant return
    const filteredSmartphones = FindId.produits.filter((el) => {
      if (selectram && selectedModel) {
        return el.ram === selectram && el.nom === selectedModel;
      } else if (selectram) {
        return el.ram === selectram;
      } else if (selectedModel) {
        return el.nom === selectedModel;
      } else { // ki ykone user  mzl ma khiyere [RAM + modéle] 
        return true; // tkone juste
      }
    });
    if (filteredSmartphones.length === 0) {
      return <h2>Il n'existe pas de modèle correspondant aux filtres sélectionnés. </h2>;
    }
    return filteredSmartphones.map((el, i) => (
      <div key={i}>
        <h1>{el.marque}</h1>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td>
                <h1>{el.nom}</h1>
              </td>
            </tr>
            <tr>
              <td>
                <img src={el.imgp} alt={el.nom} />
              </td>
            </tr>
            <tr>
              <td>
                <h1>{el.caractér}</h1>
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
    ));
  };
  return (
    <>
        <select value={selectram} onChange={(e) => setselectram(e.target.value)}>
          <option value="">RAM</option>
          {[...new Set(FindId.produits.map((el) => el.ram))].map((ram) => (
          <option key={ram} value={ram}> {ram}</option>
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
