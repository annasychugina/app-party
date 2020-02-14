import React from 'react';
import {Svg, Circle} from './preloader.styles';

interface IProps {}

export const Preloader: React.FC<IProps> = () => {
  return (
    <Svg version="1.1" x="0" y="0" viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="44" />
    </Svg>
  );
};
