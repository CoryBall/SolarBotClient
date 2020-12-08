export interface GlobalState {
    accessToken: string | undefined;
    setAccessToken?(accessToken: string): void;
}
