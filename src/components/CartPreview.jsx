import React, { useContext, useState } from "react";
import classNames from "classnames";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart
} from "contexts/cart";

const CartPreview = () => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  const [pack, setPack] = useState([])

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleAddPackage = (event) => {
    event.preventDefault();
    const pack = items;
    setPack(pack);
  };

  return (
    <div className={classNames("cart-preview", { active: isCartOpen })}>
      <ul className="cart-items">
        {items.map((product) => {
          return (
            <li className="cart-item" key={product.name}>
              <img className="product-image" src={product.images[0]} />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.pricePerWeek}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`${product.quantity} ${
                    product.quantity > 1 ? "Nos." : "No."
                  }`}
                </p>
                <p className="amount">
                  {product.quantity * product.pricePerWeek}
                </p>
              </div>
              <button
                className="product-remove"
                onClick={() => handleRemove(product.id)}
              >
                ×
              </button>
            </li>
          );
        })}
      </ul>

      <div className="action-block">
        <button
          type="button"
          className={classNames({ disabled: items && items.length === 0 })}
          onClick={handleAddPackage}
        >
          SAVE AS PACKAGE
        </button>
        <br /> 
        <button
          type="button"
          className={classNames({ disabled: items && items.length === 0 })}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPreview;
