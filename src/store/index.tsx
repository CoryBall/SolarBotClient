import React, {Context, createContext, useReducer} from "react";
import {GlobalState, OAuthAccessToken, OAuthDiscordUser} from "./types";
import {AppReducer} from "./appReducer";
import {Actions} from "./actions";
import {is} from "@babel/types";

const initialState: GlobalState = {
    oAuthAccessToken: {
        accessToken : "",
        tokenType : "",
        expiresIn : 0,
        refreshToken : "",
        scope : "",
    },
    user: {
        id : "",
        username : "manishman",
        discriminator : "",
        verified : false,
        email : "",
    },
    isLoggedIn: false,
}

export const StateContext: Context<GlobalState> = createContext(initialState);

export const StateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setAccessToken(oAuthAccessToken: OAuthAccessToken){
        dispatch({
            type: Actions.setAccessToken,
            payload: oAuthAccessToken,
        });
    }

    function setDiscordUser(discordUser : OAuthDiscordUser){
        dispatch({
            type: Actions.setDiscordUser,
            payload: discordUser,
        });
    }

    function setIsLoggedIn(isLoggedIn : boolean){
        dispatch({
            type: Actions.setIsLoggedIn,
            payload: isLoggedIn,
        });
    }

    return (
        <StateContext.Provider
            value={{
                oAuthAccessToken: state.oAuthAccessToken,
                user : state.user,
                isLoggedIn : state.isLoggedIn,
                setAccessToken,
                setDiscordUser,
                setIsLoggedIn,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

