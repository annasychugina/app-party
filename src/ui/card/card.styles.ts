import styled, {css} from 'styled-components';
import closeImage from './icons/close.svg';
import {CardType} from './card';

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #dadada;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${({imageUrl, type}: {imageUrl?: string | null; type: CardType}) =>
    imageUrl &&
    css`
      background-image: url(${imageUrl});
      background-size: cover;
    `}
  ${({type}: {type: CardType}) =>
    type === 'party' &&
    css`
      cursor: default;
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
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
  /* stylelint-disable font-family-no-missing-generic-family-keyword */
  font-family: Roboto;
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 28px;
`;
