export interface StateAction {
    type: string;
    payload?: any;
}

export interface GlobalState {
    accessToken: string;
}
