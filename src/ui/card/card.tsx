import React from 'react';
import {CardImage, CloseButton} from './card.styles';

interface IProps {
  imageUrl?: string | null;
  onClick: any;
}

export const Card: React.FC<IProps> = ({imageUrl, onClick}) => {
  return (
    <CardImage role="button" imageUrl={imageUrl} onClick={onClick}>
      <CloseButton type="button" />
    </CardImage>
  );
};
