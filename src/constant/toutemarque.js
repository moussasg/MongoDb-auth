import Opp from "../assets/opp.jpg" // les images
import App from "../assets/apple.png"
import Rea from "../assets/rea.png"
import Xi from "../assets/xi.png" // xiaomi
import Sam from "../assets/sam.png" // samsung
import huita from "../assets/8a.png" // 
import neufa from "../assets/9a.jpg"
import treize from "../assets/13.jpeg"
import qautorze from "../assets/14.jpg"
import ultra from "../assets/s21.jpeg"
import ultra2 from "../assets/S22.jpeg"
export const MesSmartphones = [
    { //////////////
      id: 1,
      image: Xi,
      buttonText: "Nos Produits Xiaomi",
      produits:[
        {
          marque :"Xioami",
          imgp: huita,
          nom: "8a" ,
          caractér: "caractéristique: Ram : 4gb " ,
          prix : "21000da" ,
          ram : "4gb",
        },
        {
          imgp:neufa,
          nom:"9a" ,
          caractér: "caractéristique : Ram : 2gb" ,
          prix : "22000da" ,
          ram : "2gb",
        }
      ]
    }, //////////////
    { //////////////////
      id: 2,
      image: App,
      buttonText: "Nos Produits Apple",
      produits:[
        {
          marque :"Apple" ,
          imgp: treize ,
          nom:"13" ,
          caractér: "caractéristique : Ram : 6gb" ,
          prix : "220000da" ,
          ram : "6gb",
        },
        {
          imgp: qautorze ,
          nom:"14" ,
          caractér: "caractéristique : Ram : 4gb" ,
          prix : "330000da" ,
          ram : "4gb",
        }
      ]
    },
    ///////////////////
    {
      id: 3,
      image: Sam,
      buttonText: "Nos Produits Samsung",
      produits:[
        {
          marque :"Smasung",
          imgp: ultra , 
          nom:"s21" ,
          caractér: "caractéristique : Ram : 8gb" ,
          prix : "220000da" ,
          ram : "8gb",
        },
        {
          imgp:ultra2, 
          nom:"s22" ,
          caractér: "caractéristique : Ram : 12gb" ,
          prix : "220000da",
          ram : "12gb",
        }
      ]
    },
    ////////////////////
    {
      id: 4,
      image: Rea,
      buttonText: "Nos Produits Realme",
      produits:[
        {
          marque :"Realme" ,
          imgp: huita
        },
        {
          imgp: huita
        }
      ]
    },
    /////////////////////
    {
      id: 5,
      image: Opp,
      buttonText: "Nos Produits Oppo",
      produits: [
        {
          marque :"Oppo" ,
          imgp: huita
        },
        {
          imgp: huita
        }
      ]
    }
    /////////////
  ];
export default MesSmartphones

