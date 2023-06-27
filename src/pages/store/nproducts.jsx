import React  from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom"; // giyumi ndiroh ki mankonch mdifini export
import {MesSmartphones} from "../../constant/toutemarque" // ma cst;
function Nproducts() { /// afiché les images de marques
  return (
    <>
      {MesSmartphones.map((el, i) => ( ///i= key
        <div className={classes.cardContainer} key={i}>
          <Link to={`/MesSmartphones/${el.id}`} > {/*linké vers cst MesSmartphones.id*/}
              <img src={el.image}/> {/*image de marque*/}
          </Link>
        </div>
      ))}
    </>
  );
}
export default Nproducts;