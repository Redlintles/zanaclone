import cultureImg from "@assets/cultura.bcf7316d55e0217a58e8.png";
import ItemImg from "@components/ItemImg/ItemImg";
import styled from "styled-components";
import Container from "@components/Container/Container";

const StyledCulture = styled.section`
  width: 100%;
  height: 120vh;
`;

export default function Culture() {
  return (
    <Container>
      <StyledCulture>
        <ItemImg src={cultureImg} />
      </StyledCulture>
    </Container>
  );
}
