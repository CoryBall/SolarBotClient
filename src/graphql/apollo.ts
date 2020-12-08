import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, HttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context'
import { useContext, useMemo } from 'react'
import { StateContext } from '../store'
import Cookies from 'js-cookie'

let authToken: string
const isBrowser = typeof window !== 'undefined'

const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://solarbot.com'
    : 'http://localhost:4000'

const endpoint = `${SERVER_URL}/graphql`

const link = createHttpLink({
  uri: endpoint
})
const cache = new InMemoryCache()

export async function getStaticApolloClient () {
  return new ApolloClient({
    link,
    cache
  })
}

const authLink = setContext((_, { headers }) => {
  if (typeof window !== 'undefined') {
    authToken = Cookies.get('authToken')
  }
  if (headers) {
    authToken = headers.token
  }

  return {
    headers: {
      ...headers,
      Authorization: authToken ? `Bearer ${authToken}` : ''
    }
  }
})

function createApolloClient () {
  return new ApolloClient({
    uri: '/graphql',
    ssrMode: !isBrowser,
    link: authLink.concat(link as any) as any,
    cache: new InMemoryCache()
  })
}

export function initializeApollo (initialState = null) {
  const _apolloClient = createApolloClient()

  if (initialState) { _apolloClient.cache.restore(initialState) }

  if (!isBrowser) return _apolloClient

  return _apolloClient
}

export function useApollo (initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
//
// export const client = new ApolloClient({
//   ssrMode: typeof window === 'undefined',
//   link: createHttpLink({
//     uri: 'http://localhost:4000',
//     headers: {
//       authorization: `Bearer ${accessToken}`
//     }
//   }),
//   // link: httpLink.concat(authLink as any),
//
//   // authLink.concat(httpLink as any) as any,
//   cache: new InMemoryCache()
// })
