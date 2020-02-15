export interface IFieldInputCallback {
  (value: string): void;
}

export interface ICharacter {
  name: string;
  image: string;
  id: string;
}

export interface ICharacters {
  results: Array<ICharacter> | null;
}

export interface IPartyQuery {
  party: {
    rick: ICharacter;
    morty: ICharacter;
  };
}
