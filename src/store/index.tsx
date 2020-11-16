import React, {Context, createContext, useReducer} from "react";
import {GlobalState} from "./types";
import {AppReducer} from "./appReducer";
import {Actions} from "./actions";

const initialState: GlobalState = {
    accessToken: ""
}

export const StateContext: Context<GlobalState> = createContext(initialState);

export const StateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setAccessToken(accessToken: string){
        dispatch({
            type: Actions.setAccessToken,
            payload: accessToken,
        });
    }

    return (
        <StateContext.Provider
            value={{
                accessToken: state.accessToken,
                setAccessToken,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

