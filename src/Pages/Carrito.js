import React, {useContext} from 'react'
import {CartContext} from '../components/Context/CartContext'
import CartListItem from '../components/CartListItem/CartListItem';
import Navbar from '../components/NavBar/Navbar';


function Carrito() {
    const cartContext = useContext(CartContext);
    const { cart, deleteCartById, deleteCart } = cartContext;

    const finalizarCompra = () => {
        deleteCart()
        alert("Gracias por tu compra")
    }
    
    const sumarTotal = (productos)=> {
        let total=0 
        for (let index = 0; index < productos.length; index++) {
            total+= productos[index].precio*productos[index].quantity
        }
        return total
    }
    return (
        <main className="display-page">
            <Navbar/>
            <div className='aviso'>
            <h2 className='tucarrito'>Tu carrito de compras</h2>
            </div>
            <CartListItem cart={cart} deleteCartById={deleteCartById}  deleteCart={deleteCart} finalizarCompra={finalizarCompra}/>
            {cart.length ? (<h3>Total: ${sumarTotal(cart)}</h3>):null}
            
        </main>
    )
}

export default Carrito
