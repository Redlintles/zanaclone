import styled from "styled-components";

interface ItemImgProps {
  src: string;
  width?: string;
  height?: string;
}

const StyledItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export default function ItemImg({ src, width, height }: ItemImgProps) {
  return (
    <StyledItemImg
      style={{
        backgroundImage: `url(${src})`,
        width: width ? width : "",
        height: height ? height : "",
      }}
    />
  );
}
