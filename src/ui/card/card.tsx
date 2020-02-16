import React from 'react';
import {CardImage, CardText, CloseButton} from './card.styles';

export type CardType = 'party' | 'default';

interface IProps {
  imageUrl?: string | null;
  onClick?: (e: React.SyntheticEvent) => void;
  onRemoveCharacter?: (e: React.SyntheticEvent) => void;
  type?: CardType;
  children?: any;
}

export const Card: React.FC<IProps> = ({children, onClick, imageUrl, type = 'default', onRemoveCharacter}) => {
  return (
    <CardImage type={type} role="button" data-testid="character-card" imageUrl={imageUrl} onClick={onClick}>
      {type === 'default' && <CloseButton data-testid="remove" type="button" onClick={onRemoveCharacter} />}
      {type === 'party' && !imageUrl && <CardText>{children}</CardText>}
    </CardImage>
  );
};
