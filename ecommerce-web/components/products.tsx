import { styled } from "styled-components";
import { Center } from "./header";
import ProductBox from "./product-box";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding-top: 20px;
  gap: 50px;
`;

export default function Products({ products }) {
  return (
    <Center>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <ProductBox product={product} />)}
      </ProductsGrid>
    </Center>
  );
}
