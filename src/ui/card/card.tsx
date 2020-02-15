import React from 'react';
import {CardImage, CardText, CloseButton} from './card.styles';

interface IProps {
  imageUrl?: string | null;
  onClick?: (e: React.SyntheticEvent) => void;
  onRemoveCharacter?: (e: React.SyntheticEvent) => void;
  type?: 'party' | 'default';
  children?: any;
}

export const Card: React.FC<IProps> = ({children, onClick, imageUrl, type = 'default', onRemoveCharacter}) => {
  return (
    <CardImage role="button" imageUrl={imageUrl} onClick={onClick}>
      {type === 'default' && <CloseButton type="button" onClick={onRemoveCharacter} />}
      {type === 'party' && !imageUrl && <CardText>{children}</CardText>}
    </CardImage>
  );
};
