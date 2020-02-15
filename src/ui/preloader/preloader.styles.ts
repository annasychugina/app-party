import styled, {keyframes} from 'styled-components';

const spinnerRotate = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(1080deg);
  }
`;

const spinnerOffset = keyframes`
  0%,
  100% {
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dashoffset: -280;
  }
`;

export const Circle = styled.circle`
  fill: none;
  stroke-dasharray: 280;
  stroke-dashoffset: 100;
  stroke-linecap: round;
  stroke-width: 5;
  animation: spinner-offset 3s linear infinite;
  stroke: #dadada;
  animation: 3s ${spinnerOffset} linear infinite;
`;

export const Svg = styled.svg`
  margin-right: auto;
  margin-left: auto;
  display: block;
  width: 80px;
  height: 80px;
  animation: spinner-rotate 3s linear infinite;
  animation: 3s ${spinnerRotate} linear infinite;
`;
