import styled from "styled-components";

const StyledSeparator = styled.span`
  display: block;
  width: 100%;
  height: 5px;
  background-color: var(--color-gray);
  margin: 2rem auto;
`;

interface SeparatorProps {
  margin?: string;
  width?: string;
}

export default function Separator({ margin, width }: SeparatorProps) {
  return <StyledSeparator style={{ margin, width }} />;
}
