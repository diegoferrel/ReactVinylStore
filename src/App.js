import React from 'react';
import './App.css';
import Header from './componentes/Header'
import Catalogo from './componentes/Catalogo';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <section className="banner">
        <h1>Descubre tus vinilos favoritos</h1>
        <p>Explora nuestra colección exclusiva</p>
      </section>
      <main>
        <Catalogo />
      </main>
    </div>
    </Router>
  );
}

export default App;
