import styled, { css } from "styled-components";
export const CardWrapper = styled.div`
   position: relative;
   width: 100%;
   cursor: pointer;
   background-color: #DADADA;
   ${(props: any) =>
  props.imageUrl && `
    background-image: url(${props.imageUrl});
    background-size: cover;
  `}
`;
