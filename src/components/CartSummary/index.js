import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartItemsCount = cartList.length

      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <div className="order-details-container">
              <h1 className="cart-summary-title">
                Order Total:{' '}
                <span className="total-amount">Rs {totalAmount}/-</span>
              </h1>
              <p className="cart-summary-text">
                {cartItemsCount} Items in cart
              </p>
            </div>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
