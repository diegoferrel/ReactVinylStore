import { useState } from "react";

function Vinilo({vinilo, onVerDetalles}){
    const [reproduccion,setReproduccion] = useState(false);
    const [audio] = useState(new Audio(vinilo.previewUrl));


const ReproducirAudio = () =>{
    if(reproduccion){
        audio.pause();
        audio.currentTime = 0;
    }
    else{
        audio.play();
    }
    setReproduccion(!reproduccion)
};


return(
    <article className="card">
        <img src={vinilo.artworkUrl100.replace("100x100","300x300")} alt={vinilo.trackName}/>
        <h3>{vinilo.trackName}</h3>
        <p>{vinilo.artistName}</p>
        <button onClick={ReproducirAudio}>
            {reproduccion ? "Pausar Preview" : "Escuchar Preview"}
        </button>
        <button onClick={onVerDetalles}>Ver Mas</button>
    </article>
)
}
export default Vinilo;