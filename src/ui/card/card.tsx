import React from 'react';
import {CardImage, CardText, CloseButton} from './card.styles';

interface IProps {
  imageUrl?: string | null;
  onRemoveCharacter?: (e: React.SyntheticEvent) => void;
  type?: 'party' | 'default';
  children?: any;
}

export const Card: React.FC<IProps> = ({children, imageUrl, type = 'default', onRemoveCharacter}) => {
  return (
    <CardImage role="button" imageUrl={imageUrl}>
      {type === 'default' && <CloseButton type="button" onClick={onRemoveCharacter} />}
      {type === 'party' && !imageUrl && <CardText>{children}</CardText>}
    </CardImage>
  );
};
