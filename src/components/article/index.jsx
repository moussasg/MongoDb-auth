import React, { useState } from "react";
import classes from "./index.module.css";
import { useParams } from "react-router-dom";
import { MesSmartphones } from "../../constant/toutemarque";
function Card() {
  const { id } = useParams();
  const FindId = MesSmartphones.find((el) => el.id.toString() === id);
  const [selectram, setselectram] = useState(""); // pour les RAM / setselectram nutiliziwha f onchange t3 select
  const [selectedModel, setSelectedModel] = useState(""); // pour les noms de modéles /setSelectedModel nutiliziwha f onchange t3 select
  const [selectgb , setselectgb] = useState("")
  const renderSmartphones = () => { // renderSmartphones prend tout le code avant return
    const filteredSmartphones = FindId.produits.filter((el) => { //map a intérieur de produits constante.js
      if (selectram && selectgb && selectedModel) { // quand je séléctionne 3 filtre
        return el.ram === selectram && el.nom === selectedModel && el.gb === selectgb;
      } // quand je séléctionne 2 filtre ram+gb
      else if (selectram && selectgb) {
        return el.ram === selectram && el.gb === selectgb;
      } // quand je séléctionne 2 filtre ram+modéle
      else if (selectram && selectedModel) {
        return el.ram === selectram && el.nom === selectedModel;
      } else if (selectedModel && selectgb) { // quand je séléctionne 2 filtre gb+modéle
        return el.nom === selectedModel && el.gb === selectgb;
      } else if (selectram) {
        return el.ram === selectram;
      } else if (selectedModel) {
        return el.nom === selectedModel;
      } else if (selectgb) {
        return el.gb === selectgb;
      } else {
        return true;
      }})
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
                <img src={el.imgp} alt={el.nom} /> {/*imgp semitha dans const.js */}
              </td>
            </tr>
            <tr>
              <td>
                <h1>{el.caractér} / {el.gb} Stockage </h1> {/* caractér semitha dakhel const.js*/} 
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
    <> {/* selectram + setselectram utilisé f usestate au dessus*/ }
        <select value={selectram} onChange={(e) => setselectram(e.target.value)}> 
          <option value="">RAM</option>
          {[...new Set(FindId.produits.map((el) => el.ram))].map((ram) => (// dkhelte dakehl produits mapite 3la ram ram key utilisé
          <option key={ram} value={ram}> {ram}</option> 
        ))}
        </select>
        <select value={selectgb} onChange={(e)=>setselectgb(e.target.value)}>
          <option value="">Stockage</option>
          {[...new Set(FindId.produits.map((el)=>el.gb))].map((gb) => ( // dkhelte dakehl produits mapite 3la gb gb key utilisé
            <option key={gb} value={gb}> {gb} </option> 
          ))}
        </select>
        <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
          <option value="">Modèle</option>
          {[...new Set(FindId.produits.map((el) => el.nom))].map((model) => ( // dkhelte dakehl produits mapite 3la model
            <option key={model} value={model}>{model}</option>
         ))}
         </select>
      {renderSmartphones()}
    </>
  );
}
export default Card;
