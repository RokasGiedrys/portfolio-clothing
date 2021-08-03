import "../checkout-item/checkout-item.styles.scss";
import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
  addQuanityToItemFromCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  addQuanityToItemFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => addQuanityToItemFromCart(cartItem)}
        >
          &#10095;
        </div>
      </div>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addQuanityToItemFromCart: (item) => dispatch(addQuanityToItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
