import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Character = {
  __typename?: 'Character';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  origin?: Maybe<Location>;
  location?: Maybe<Location>;
  image?: Maybe<Scalars['String']>;
  episode?: Maybe<Array<Maybe<Episode>>>;
  created?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  air_date?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
  characters?: Maybe<Array<Maybe<Character>>>;
  created?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  count?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  residents?: Maybe<Array<Maybe<Character>>>;
  created?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
};

export type QueryCharacterArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};

export type QueryLocationArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};

export type QueryEpisodeArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};
