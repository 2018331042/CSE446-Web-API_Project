import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartproducts] = useState([]);

  useEffect(() => {
    console.log({ localStorage });
    if (cartProducts?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      //   setCartproducts(JSON.parse(localStorage.getItem("cart")));
      setCartproducts(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  function addProduct(product) {
    setCartproducts((prev) => [...prev, product]);
  }
  return (
    <CartContext.Provider value={{ cartProducts, setCartproducts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
