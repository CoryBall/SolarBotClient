import React from 'react'
import Cookies from 'js-cookie'
import { useApolloClient } from '@apollo/client'
import { createLink } from '../utils/apollo'

export type AppProviderProps = {
    children: React.ReactNode
};

export type AppContextPropTypes = {
    accessToken: string | undefined;
    setAccessToken?(_: string): void;
};

export const AppContext = React.createContext<AppContextPropTypes>({
  accessToken: undefined,
  setAccessToken (_: string) {}
})

export const AppProvider = ({ children }: AppProviderProps) => {
  const currentClient = useApolloClient()
  function getTokenFromCookie () : string | undefined {
    if (typeof window !== 'undefined') {
      return Cookies.get('authToken')
    }
  }
  const [accessToken, setAccessToken] = React.useState<string | undefined>(getTokenFromCookie)

  const setToken = (token: string) => {
    setAccessToken(token)
    if (currentClient) {
      console.log(`Setting user's token: ${token}`)
      createLink(token)
    }
    Cookies.set('authToken', token)
  }

  return (
        <AppContext.Provider
            value={{
              accessToken,
              setAccessToken: setToken
            }}>
            {children}
        </AppContext.Provider>
  )
}

export const useApp = () => React.useContext(AppContext)
export default useApp
