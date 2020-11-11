import {Actions} from "./actions";
import {GlobalState} from "./types";

export const AppReducer = (state: GlobalState, action: {type: string; payload: any}) => {
    switch (action.type) {
        case Actions.setAccessToken:
            return {
                ...state,
                oAuthAccessToken: action.payload,
            };

        case Actions.setDiscordUser:
            return {
                ...state,
                user : action.payload,
            };

        case Actions.setIsLoggedIn:
            return {
                ...state,
                isLoggedIn : action.payload,
            }
    }
}