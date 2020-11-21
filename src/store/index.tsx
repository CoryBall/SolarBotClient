import React, { Context, createContext, useReducer, useCallback } from 'react'
import { GlobalState, StateAction } from './types'
import { AppReducer } from './appReducer'

const initialState: GlobalState = {
  accessToken: ''
}

export const StateContext = createContext<{
  state: GlobalState;
  dispatch:(action: StateAction) => void;
    }>({ state: initialState, dispatch: () => {} })

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <StateContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
