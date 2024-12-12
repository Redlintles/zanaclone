import { Link } from "react-router-dom";
import Container from "@components/Container/Container";
import ItemText from "@components/ItemText/ItemText";
import styled from "styled-components";

const StyledLocalizationMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  align-items: baseline;

  & > div {
    margin: 0 auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function Localization() {
  return (
    <Container padding="2rem 18rem" slideInFromLeft>
      <StyledLocalizationMain>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.242107446491!2d-46.90473732383065!3d-23.595648562854326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf00ba175e3e6f%3A0xc88580f0a400e21b!2sZanaflex%20Borrachas!5e0!3m2!1spt-BR!2sbr!4v1733624708200!5m2!1spt-BR!2sbr"
            style={{ width: "100%", height: "700px" }}
            loading="lazy"
          >
            <ItemText>Este iframe não pode ser exibido</ItemText>
          </iframe>
          <section className="localization-main__text">
            <ItemText lineHeight="1.25" fontSize="1.5rem">
              Zanaflex &reg;
            </ItemText>
            <ItemText lineHeight="1.25">Zanaflex Borrachas Ltda.</ItemText>
            <ItemText lineHeight="1.25">Av. Vasco Massafeli, 1010</ItemText>
            <ItemText lineHeight="1.25">
              Cotia - SP - Brasil - CEP 06703-600
            </ItemText>
            <ItemText lineHeight="1.25">Fone : +55 (11) 2165-3450</ItemText>
            <ItemText lineHeight="1.25">Fax : +55 (11) 2165-3451</ItemText>
            <Link to="/">www.zanaflex.com.br</Link>
          </section>
        </div>
      </StyledLocalizationMain>
    </Container>
  );
}
