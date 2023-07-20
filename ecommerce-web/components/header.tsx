import Link from "next/link";
import { styled } from "styled-components";
import { useCart } from "./contexts/cart-context";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const Center = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;
export default function Header() {
  const { cartProducts } = useCart();
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav>
            <NavLink href={"/products"}>Products</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts?.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
