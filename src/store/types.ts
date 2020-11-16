export interface GlobalState {
    accessToken : string;

    setAccessToken?(accessToken : string): void;
}