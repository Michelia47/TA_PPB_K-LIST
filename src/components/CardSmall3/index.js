import React from "react";
import "./index.css";

export default function CardSmall3({ img, judul, sinopsis }) {
  return (
    <div className="card2">
      <img src={img} alt="" className="photo2" />
      <div className="description2">
        <div>
          <p id="judul">{judul}</p>
          <p id="sinopsis">{sinopsis}</p>
        </div>
      </div>
    </div>
  );
}
