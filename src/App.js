import React from 'react';
import './App.css';
import Header from './componentes/Header'
import Catalogo from './componentes/Catalogo';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <section class="banner">
        <h1>Descubre tus vinilos favoritos</h1>
        <p>Explora nuestra colección exclusiva</p>
      </section>
      <main>
        <Catalogo />
      </main>
    </div>
  );
}

export default App;
