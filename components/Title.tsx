import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children: ReactNode;
}

const TitleWrapper = styled.h1`
  text-align: center;
  font-size: 4rem;
  line-height: 0.5;
  margin: 3rem 0;
`;

export default function Title({ children }: TitleProps) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
