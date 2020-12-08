import * as Apollo from '@apollo/client'
import gql from 'graphql-tag'
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
  me?: Maybe<NextauthUser>;
  guilds?: Maybe<Array<DiscordGuild>>;
};

export type QueryMeArgs = {
  sessionToken: Scalars['String'];
};

export type NextauthUser = {
  __typename?: 'NextauthUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  email: Scalars['String'];
  emailVerified: Scalars['DateTime'];
  image: Scalars['String'];
  accounts: Array<NextauthAccount>;
  sessions: Array<NextauthSession>;
};

export type NextauthAccount = {
  __typename?: 'NextauthAccount';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  compoundId: Scalars['ID'];
  userId: Scalars['ID'];
  user: NextauthUser;
  providerType: Scalars['String'];
  providerId: Scalars['String'];
  providerAccountId: Scalars['String'];
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
  accessTokenExpires: Scalars['DateTime'];
};

export type NextauthSession = {
  __typename?: 'NextauthSession';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['ID'];
  user: NextauthUser;
  expires: Scalars['DateTime'];
  sessionToken: Scalars['String'];
  accessToken: Scalars['String'];
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

export type MeQueryVariables = Exact<{
  token: Scalars['String'];
}>;

export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'NextauthUser' }
    & Pick<NextauthUser, 'name' | 'email' | 'image'>
    & { accounts: Array<(
      { __typename?: 'NextauthAccount' }
      & Pick<NextauthAccount, 'accessToken'>
    )> }
  )> }
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
    `

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
export function useAllGuildsQuery (baseOptions?: Apollo.QueryHookOptions<AllGuildsQuery, AllGuildsQueryVariables>) {
  return Apollo.useQuery<AllGuildsQuery, AllGuildsQueryVariables>(AllGuildsDocument, baseOptions)
}
export function useAllGuildsLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<AllGuildsQuery, AllGuildsQueryVariables>) {
  return Apollo.useLazyQuery<AllGuildsQuery, AllGuildsQueryVariables>(AllGuildsDocument, baseOptions)
}
export type AllGuildsQueryHookResult = ReturnType<typeof useAllGuildsQuery>;
export type AllGuildsLazyQueryHookResult = ReturnType<typeof useAllGuildsLazyQuery>;
export type AllGuildsQueryResult = Apollo.QueryResult<AllGuildsQuery, AllGuildsQueryVariables>;
export const MeDocument = gql`
    query me($token: String!) {
  me(sessionToken: $token) {
    name
    email
    image
    accounts {
      accessToken
    }
  }
}
    `

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useMeQuery (baseOptions: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;

export const AllGuilds = gql`
    query allGuilds {
  guilds {
    id
    name
    icon
    owner
  }
}
    `
export const Me = gql`
    query me($token: String!) {
  me(sessionToken: $token) {
    name
    email
    image
    accounts {
      accessToken
    }
  }
}
    `

export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
const result: PossibleTypesResultData = {
  possibleTypes: {}
}
export default result
