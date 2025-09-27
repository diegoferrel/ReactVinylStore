import React, {useState, useEffect} from "react";
import Vinilo from "./Vinilo";
import "../css/Catalogo.css"
import ProductoModal from "./ProductoModal";

function Catalogo(){
    const [viniloSeleccionado, setViniloSeleccionado] = useState(null);
    const [vinilos,setVinilos] = useState([]);
    const [busqueda,setBusqueda] = useState("");

    const cargarVinilos = async (termino = "vinyl") =>{
        try{
            const res = await fetch (
                `https://itunes.apple.com/search?term=${encodeURIComponent(termino)}&entity=song&limit=9`
            );
            const data = await res.json();
            setVinilos(data.results);
        }
        catch(error){
            console.error("Error al cargar vinilos:",error);
            setVinilos([]);
        }
    };

    useEffect(() =>{
        cargarVinilos();
    },[]);
    const handleBuscar = () => {
        if(busqueda.trim()){
            cargarVinilos(busqueda)
        }
    };

    return(
        <section className="catalogo" id = "catalogo">
            <h2>Catalogo</h2>
            <div className="buscador">
                <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Busca un artista o album"
                />
                <button onClick={handleBuscar}>Buscar</button>
            </div>
            <div className="grid">
                {vinilos.length > 0 ? (
                    vinilos.map((vinilo) => (
                    <Vinilo
                         key={vinilo.trackId}
                          vinilo = {vinilo}
                           onVerDetalles={() => setViniloSeleccionado(vinilo)}
                           />))
                ) : (
                    <p>No se encontraron resultados</p>
                )}
            </div>

            {viniloSeleccionado && (<ProductoModal
            vinilo={viniloSeleccionado}
            onClose={() => setViniloSeleccionado(null)}/>)}
        </section>
    )
}
export default Catalogo;