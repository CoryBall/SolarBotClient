import {Actions} from "./actions";
import {GlobalState} from "./types";

export const AppReducer = (state: GlobalState, action: {type: string; payload: any}) => {
    switch (action.type) {
        case Actions.setAccessToken:
            return {
                ...state,
                accessToken: action.payload,
            };
    }
}