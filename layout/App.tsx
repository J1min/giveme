import { ReactNode } from "react";
import { styled } from "styled-components";

interface MainLayoutProps {
  utterance: ReactNode;
  title: ReactNode;
  money: ReactNode;
}

function Frame({ utterance, money, title }: MainLayoutProps) {
  return (
    <div>
      <div>{title}</div>
      <StyledFrame>{money}</StyledFrame>
      <div>{utterance}</div>
    </div>
  );
}

const StyledFrame = styled.div`
  display: flex;
  justify-content: center;
`;

export default function MainLayout({ ...props }: MainLayoutProps) {
  return <Frame {...props} />;
}
