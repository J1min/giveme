import { theme } from "@/style/theme";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

export type ButtonStyle = "main" | "frame";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  type = "button",
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      type={type === "button" ? "button" : "submit"}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  background-color: ${theme.main};
  border-radius: 0.3rem;
  color: ${theme.white};
  padding: 0.5rem 1.25rem;
  font-weight: 900;
  border: 0;
  font-size: 0.875rem;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;
