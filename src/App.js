import React from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/card"
import data from "./data"

import './App.css';




function App() {
  const cards = data.map(item => {
    return (
        <Cards
            key={item.id}
            {...item}
            
        />
    )
})
  return (
    <div className="App">
     <Navbar/>
    <Hero/> 
    <section className="cards-list">
           {cards}
           {cards}
           {cards}
    </section>
 
    
    </div>
  );
}

export default App;
