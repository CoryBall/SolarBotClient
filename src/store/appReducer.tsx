import { Actions } from './actions'
import { GlobalState, StateAction } from './types'
import { Reducer } from 'react'

export const AppReducer: Reducer<GlobalState, StateAction> = (state, action) => {
  switch (action.type) {
    case Actions.setAccessToken:
      return {
        ...state,
        accessToken: action.payload
      }
    default:
      return state
  }
}
