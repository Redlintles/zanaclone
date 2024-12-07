import cultureImg from "@assets/cultura.bcf7316d55e0217a58e8.png";
import ItemImg from "../../components/ItemImg/ItemImg";
import styled from "styled-components";

const StyledCulture = styled.section`
  width: 100%;
  height: 120vh;
`;

export default function Culture() {
  return (
    <StyledCulture>
      <ItemImg src={cultureImg} />
    </StyledCulture>
  );
}
