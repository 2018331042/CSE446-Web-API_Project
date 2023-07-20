import { styled } from "styled-components";
import Button from "./button";
import CartIcon from "./icons/cart-icon";
import Link from "next/link";
import { useCart } from "./contexts/cart-context";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 200px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  img {
    max-width: 100%;
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfo = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export default function ProductBox({ product }) {
  const { addProduct, cartProducts } = useCart();
  console.log({ cartProducts });

  const url = "products/_id";

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src="./vivobook-x515ka-slate-grey-01-500x500.webp" />{" "}
      </WhiteBox>
      <ProductInfo>
        <Title href={url}>{product.name}</Title>
        <PriceRow>
          <Price>{product.price} TK</Price>
          <Button onClick={() => addProduct(product._id)} primary>
            {" "}
            <CartIcon />
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfo>
    </ProductWrapper>
  );
}
