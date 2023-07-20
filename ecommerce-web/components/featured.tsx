import { styled } from "styled-components";
import { Center } from "./header";
import Button from "./button";
import ButtonLinks from "./button-links";
import CartIcon from "./icons/cart-icon";

const Background = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Columns = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
`;

export default function Featured({ products }) {
  console.log({ products });

  return (
    <Background>
      <Center>
        <Wrapper>
          <Columns>
            <div>
              <Title>Pro Move</Title>
              <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Desc>
              <ButtonsWrapper>
                <ButtonLinks href={"/products"} white outline>
                  Read more
                </ButtonLinks>
                <Button primary>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Columns>
          <Columns>
            <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" />
          </Columns>
        </Wrapper>
      </Center>
    </Background>
  );
}
