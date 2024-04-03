import React from "react";
import { useState } from "react";
import "./fruitcounter.css";

const Fruitcounter = () => {
  const [mango, setMango] = useState(0);
  const [banana, setBanana] = useState(0);
  return (

    <div className="bgcontainer">
      <div className="contentcontainer">
        <h1 className="bobcount">
          Bob ate {mango} Mangoes,{banana} Bananas
        </h1>
        <div className="picturecontainer">
          <div className="imagecontainer">
            <img  className="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUA5NfmrkinnnSimkt2sKf1bfjRc5m30XdQ&usqp=CAU"></img>
            <br></br>
            <button className="clickon" onClick={() => setMango(mango + 1)}>
           
              Eat Mango
            </button>
          </div>
          <div className="imagecontainer">
            <img  className="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFJ45D9B5tq0e9ijztRbX_y7YTbGZzn0T1w&usqp=CAU"></img>
            <br></br>
            <button className="clickon" onClick={() => setBanana(banana + 1)}>
              {" "}
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fruitcounter;
