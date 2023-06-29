import React ,{useState} from "react";
import { useParams } from "react-router-dom";
import MesSmartphones from "../../constant/toutemarque";
function Card() {
    const {id} = useParams()
    const findId = MesSmartphones.find((el)=>el.id.toString===id)
    const [selectram , setselectram] = useState('')
    const [selectedModel , setSelectedModel] = useState('')
    const [selectgb,setselectgb] = useState('')
    const renderSmartphones = () => {
        const filteredSmartphones = findId.produits.filter((el)=> {
            if (selectram && selectedModel && selectgb) {
                return el.ram === selectram && el.nom === selectedModel && el.gb === selectgb
            }
            else if (selectram && selectedModel ) {
                return el.ram === selectram && el.nom === selectedModel
            }
            else if (selectram && selectgb) {
                return el.ram === selectram && el.gb === selectgb
            }
            else if (selectedModel && selectgb) {
                return el.selectedModel === selectedModel && el.gb === selectgb
            }
            else if (selectram) {
                el.ram === selectram
            } else if (selectedModel) {
                el.nom === selectedModel
            } else if (selectgb) {
                el.gb === selectgb
            }
            else {
                return true; // ni égale ni ram ni modéle avant ma selecta filtre dirha true
            } 
        })
        if (filteredSmartphones.length === 0) {
            return <p> pas de modéle </p>
        }
        return filteredSmartphones.map((el,i)=> (
            <div key={i}>
                <h1> {el.marque}</h1>
                <h2> {el.nom} </h2>
            </div>
        ))
    }
    return (
        <>
        </>
    )
}
export default Card