import React from "react";
import "../css/ProductoModal.css"

function ProductoModal({ vinilo, onClose }) {
  if (!vinilo) return null; // No mostrar si no hay vinilo

  const { trackName, artistName, artworkUrl100, previewUrl } = vinilo;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <img src={artworkUrl100.replace("100x100", "300x300")} alt={trackName} />
        <h2>{trackName}</h2>
        <p>{artistName}</p>
        <audio controls src={previewUrl}></audio>
      </div>
    </div>
  );
}

export default ProductoModal;