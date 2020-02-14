import styled from 'styled-components';
import closeImage from './icons/close.svg';

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #dadada;
  ${({imageUrl}: {imageUrl?: string | null}) =>
    imageUrl &&
    `
    background-image: url(${imageUrl});
    background-size: cover;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 8px;
  width: 30px;
  height: 30px;
  right: 8px;
  background-image: url(${closeImage});
`;
