import React, { createContext, useState, useEffect } from "react";
import axiosRequest from '../../Utilis/axiosRequest';

export const ItemsContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};

  // You may need to adjust this based on the structure of your API response
  const maxProductId = 100;

  for (let index = 0; index <= maxProductId; index++) {
    cart[index] = 0;
  }

  return cart;
};

const ItemContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(GetDefaultCart());
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const getTotalAmountCart = () => {
    let total = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));

        // Check if itemInfo is not undefined before accessing its properties
        if (itemInfo) {
          total += itemInfo.price * cartItem[item];
        }
      }
    }

    return total;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }

    return totalItem;
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    // Fetch products from the API and update state
    const fetchProducts = async () => {
      try {
        const response = await axiosRequest.get("/items");
        setProducts(response.data ?? []);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Update total amount when products or cartItem changes
    setTotalAmount(getTotalAmountCart());
  }, [products, cartItem]);


  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    getTotalAmountCart,
    getTotalCartItem,
    products,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemContextProvider;
