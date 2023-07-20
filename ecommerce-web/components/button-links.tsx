import Link from "next/link";
import { styled } from "styled-components";
import { ButtonStyle } from "./button";

const StyledLinks = styled(Link)`
  ${ButtonStyle}
`;

export default function ButtonLinks(props) {
  return <StyledLinks {...props} />;
}
