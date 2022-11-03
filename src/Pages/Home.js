import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "./styles.css"

export default function Home () {
    let tipoDeFiltro = "Home"
    return (
        <div>
            <Navbar/>
            <ItemListContainer tipoDeFiltro={tipoDeFiltro}/>
        </div>
    )
}
