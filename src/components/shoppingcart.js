import React, { useContext, useState } from 'react'
import { CartContext } from "../Global/CartContext";
import { Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';
import {  Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom';
import PayPal from './PayPal';
// import StripeCheckout from 'react-stripe-checkout'
const ShoppingCart = () => {
  const { shopingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const [checkout, setCheckOut] = useState(false)
console.log(shopingCart)
  return (
    <>
    
    <div className="app">
            <Layout>
                <Header title="No Reservations" style={{ background: 'black' }} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/shoppingcart">Shopping Cart</Link>
                        <Link to="/instagram">Instagram</Link>
                        {/* {checkout ? (
                            <PayPal />

                        ) : (

                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                >
                                    Checkout
                                </button>

                            )} */}


                    </Navigation>
                </Header>
                <Drawer className='drawer' title="No reservations" style={{ position: "fixed", display: "flex", flexDirection: "column" }}>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/shoppingcart">Shopping Cart ({shopingCart.length}) </Link>
                        <Link to="/instagram">Instagram</Link>
                        {checkout ? (
                            <PayPal />

                        ) : (

                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                >
                                    Checkout
                                </button>

                            )}
                    </Navigation>
                </Drawer>
                <Content>
                <div className='container-fluid '>
        <div className='row' >
          <div className='col-10 mx-auto cart-details' style={{ marginTop: 100 }}>
            {
              shopingCart.length > 0 ?
                shopingCart.map(cart => (
                  <div className='cart' key={cart.id+cart.item}>
                    <span className='cart-image'><img src={cart.image} alt='not found' /></span>
                    <span className='cart-product-name'> {cart.name} </span>
                    <span className='cart-product-price'>${cart.cost}.00</span>
                    <span className='inc' onClick={() => dispatch({ type: 'INC', id: 'cart.id', cart })}> <AddIcon /> </span>
                    <span className='product-quantity'>{cart.qty}</span>
                    <span className='dec' onClick={() => dispatch({ type: 'DEC', id: 'cart.id', cart })}> <MinimizeIcon /> </span>
                    <span className='product-total-price'>${cart.cost * cart.qty}.00</span>
                    <span className='delete-product' onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}> <DeleteIcon /> </span>
                  </div>
                ))
                : 'Sorry your cart is currently empty'
            }
          </div>
          {
            shopingCart.length > 0 ? <div className='cart-summary'>
              <div className='summary'>
                <h3>Cart Summary</h3>
                <div className='total-items'>
                  <div className='items'>Total Items </div>
                  <div className='items-count'>{qty}</div>
                </div>
                <div className ='total-price-section'>
                <div className='just-title'>Total Price</div>
                <div className ='items-price'>${totalPrice}.00 </div>
              </div>
              <div className ='stripe-section'>

              {checkout ? (
                            <PayPal />

                        ) : (
                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                className="checkout-btn"
                                >
                                    Checkout
                                </button>

                            )}
                
              </div>
              </div>
            </div> : ''
          }
        </div>
      </div>
                </Content>

                <Footer size="mega" style={{ display: "flex", flexDirection: "column" }}>
                    <FooterSection type="left" logo="Title">
                        <FooterLinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>

        </div>
        </>
  )
}
export default ShoppingCart