import React from 'react';
import {CardImage, CloseButton} from './card.styles';

interface IProps {
  imageUrl?: string | null;
  onRemoveCharacter: (e: React.SyntheticEvent) => void;
}

export const Card: React.FC<IProps> = ({imageUrl, onRemoveCharacter}) => {
  return (
    <CardImage role="button" imageUrl={imageUrl}>
      <CloseButton type="button" onClick={onRemoveCharacter} />
    </CardImage>
  );
};
