import Button from "@/components/button";
import { useCart } from "@/components/contexts/cart-context";
import Header, { Center } from "@/components/header";
import Table from "@/components/table";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { SUPPLIER_API_ROUTE } from "@/utils/constant";
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 40px;
`;
const Box = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

const QuantityLabel = styled.span`
  padding: 0 2px;
`;
export default function CartPage() {
  const { cartProducts, addProduct } = useCart();
  const { products, setProducts } = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.post("/api/cart", {
        cartProducts,
      });
      console.log({ response });

      //   setProducts(data.products);
    } catch (err) {
      console.log(err);
      //   setProducts([]);
    }
  };
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {cartProducts?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product) => (
                    <tr>
                      <td> {product.name}</td>
                      <td>
                        <Button>-</Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter(
                              (cartProduct) => cartProduct._id === product._id
                            ).length
                          }
                        </QuantityLabel>
                        <Button onClick={() => addProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        {cartProducts.filter(
                          (cartProduct) => cartProduct._id === product._id
                        ).length * product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>
              <input type="text" placeholder="Address" />
              <Button primary>Continue to Payment</Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
