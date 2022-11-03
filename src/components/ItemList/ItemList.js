import React from 'react'
import Item from '../item/item'
import "./styles.css"

function ItemList ({data, tipoDeFiltro}) {
    //filtro segun el tipo de pagina 
    let filteredData = data.filter (data => data.tipo === tipoDeFiltro)
    return (
        <div className='ItemList'>
            <h3> {tipoDeFiltro}</h3>
            <table>
                <tbody>
                { tipoDeFiltro==="Home" ? data.map(i=>{ return <Item  key ={data.id} item={i}/>}) : filteredData.map(i=>{ return <Item  key ={filteredData.id} item={i}/>})}
                </tbody>
             </table>
        </div>
    )
}

export default ItemList
