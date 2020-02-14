import React from 'react';
import {CardWrapper} from './card.styles';

interface IProps {
  imageUrl?: string | null
}

export const Card: React.FC<IProps> = ({imageUrl}) => {

  return (
    <CardWrapper imageUrl={imageUrl}>

    </CardWrapper>
  );
};
