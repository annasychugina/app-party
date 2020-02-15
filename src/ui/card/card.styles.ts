import styled from 'styled-components';
import closeImage from './icons/close.svg';

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #dadada;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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

export const CardText = styled.p`
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
`;
