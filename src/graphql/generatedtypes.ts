import * as Apollo from '@apollo/client';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<DiscordUserEntity>;
  guilds?: Maybe<Array<DiscordGuild>>;
};

export type DiscordUserEntity = {
  __typename?: 'DiscordUserEntity';
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  modified: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  authToken: Scalars['String'];
  username: Scalars['String'];
  discriminator: Scalars['String'];
  avatarUrl: Scalars['String'];
};


export type DiscordGuild = {
  __typename?: 'DiscordGuild';
  id: Scalars['String'];
  name: Scalars['String'];
  icon: Scalars['String'];
  owner: Scalars['Boolean'];
};

export type AllGuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGuildsQuery = (
  { __typename?: 'Query' }
  & { guilds?: Maybe<Array<(
    { __typename?: 'DiscordGuild' }
    & Pick<DiscordGuild, 'id' | 'name' | 'icon' | 'owner'>
  )>> }
);


export const AllGuildsDocument = gql`
    query allGuilds {
  guilds {
    id
    name
    icon
    owner
  }
}
    `;

/**
 * __useAllGuildsQuery__
 *
 * To run a query within a React component, call `useAllGuildsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGuildsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGuildsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGuildsQuery(baseOptions?: Apollo.QueryHookOptions<AllGuildsQuery, AllGuildsQueryVariables>) {
        return Apollo.useQuery<AllGuildsQuery, AllGuildsQueryVariables>(AllGuildsDocument, baseOptions);
      }
export function useAllGuildsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGuildsQuery, AllGuildsQueryVariables>) {
          return Apollo.useLazyQuery<AllGuildsQuery, AllGuildsQueryVariables>(AllGuildsDocument, baseOptions);
        }
export type AllGuildsQueryHookResult = ReturnType<typeof useAllGuildsQuery>;
export type AllGuildsLazyQueryHookResult = ReturnType<typeof useAllGuildsLazyQuery>;
export type AllGuildsQueryResult = Apollo.QueryResult<AllGuildsQuery, AllGuildsQueryVariables>;

export const AllGuilds = gql`
    query allGuilds {
  guilds {
    id
    name
    icon
    owner
  }
}
    `;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    