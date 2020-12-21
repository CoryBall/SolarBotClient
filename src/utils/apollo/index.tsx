import React from 'react'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://solarbot.com'
    : 'http://localhost:4000'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient (accessToken: string | undefined) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createLink(accessToken),
    cache: new InMemoryCache()
  })
}

export function initializeApollo (accessToken: string | undefined = undefined, initialState: NormalizedCacheObject = null) {
  const _apolloClient = apolloClient ?? createApolloClient(accessToken)

  if (initialState) {
    const existingCache = _apolloClient.extract()

    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo (initialState: NormalizedCacheObject) {
  return React.useMemo(() => initializeApollo(undefined, initialState), [initialState])
}

function createHttpLink (accessToken: string | undefined) {
  return new HttpLink({
    uri: `${SERVER_URL}/graphql`,
    credentials: 'same-origin',
    fetch,
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    }
  })
}

function createErrorLink () {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(item => {
        const { message } = item
        console.log(message)
      })
    }
    if (networkError) {
      console.log('GraphQL Network Error: ', networkError.message)
    }
  })
}
export function createLink (accessToken?: string | undefined) {
  console.log('Setting Apollo Header', accessToken)
  return ApolloLink.from([createErrorLink(), createHttpLink(accessToken)])
}
