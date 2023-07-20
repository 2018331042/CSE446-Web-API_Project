import { CartContextProvider } from "@/components/contexts/cart-context";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
// import "../styles/global.css";
const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body{
  background-color:#C9C9C9;
  padding:0;
  margin:0;
  font-family: "Roboto", sans-serif;
}
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
