import React from 'react'
import CartItem from '../CartItem/CartItem';

import './styles.css'
function CartListItem({cart, deleteCart, deleteCartById, finalizarCompra}) {
    
    return (
        <section className="list-cart-container">
            {cart ? (cart.map( product => {
                return( <CartItem key={product.id} 
                                  item={product} 
                                  deleteCartById={deleteCartById} 
                        /> );
                }))
                  : <p>cargando productos</p>
            }
            {cart.length ? (
                <div>
                <button 
                            className="button-primary button-padding"
                            onClick={deleteCart}
                      >Vaciar Carrito</button>
                      <button 
                      className="button-primary button-padding"
                      onClick={finalizarCompra}
                >Finalizar compra</button>
                </div>)
                         : <h2 className='avisoCarrito'>No hay productos en el carrito &#128528;</h2>
                        
            }
        </section>
    )
}

export default CartListItem

