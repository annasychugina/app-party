import styled, {css} from 'styled-components';
export const PartyWrapper = styled.div`
  max-width: 400px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export const PartyTitle = styled.title`
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
  /* stylelint-disable font-family-no-missing-generic-family-keyword */
  font-family: Roboto;
  display: block;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #000000;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const CharactersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 220px;
  max-width: 200px;
  ${({type}: {type: 'left' | 'right'}) =>
    type === 'left'
      ? css`
          padding-right: 15px;
        `
      : css`
          padding-left: 15px;
        `}
`;
