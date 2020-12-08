import React, {
  Context,
  createContext,
  useReducer
} from 'react'
import { GlobalState } from './types'
import AppReducer from './appReducer'
import { Actions } from './actions'
import { useMeQuery } from '../graphql/generatedtypes'
import Cookies from 'js-cookie'

const initialState: GlobalState = {
  accessToken: undefined,
  setAccessToken: () => {}
}

export const StateContext: Context<GlobalState> = createContext(initialState)

// eslint-disable-next-line react/prop-types
export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const cookieToken = Cookies.get('authToken')

  function setAccessToken (accessToken: string) {
    const { data, error } = useMeQuery({
      variables: {
        token: accessToken
      }
    })
    if (!error && data?.me) {
      dispatch({
        type: Actions.setAccessToken,
        payload: data.me?.accounts[0].accessToken
      })
    } else {
      dispatch({
        type: Actions.setAccessToken,
        payload: accessToken
      })
    }
    if (typeof window !== 'undefined') { localStorage.setItem('oauthToken', accessToken) }
  }

  return (
    <StateContext.Provider
      value={{
        accessToken: cookieToken,
        setAccessToken: setAccessToken
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
