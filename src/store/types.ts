export interface GlobalState {
    oAuthAccessToken : OAuthAccessToken;
    user : OAuthDiscordUser;
    isLoggedIn : boolean;

    setAccessToken?(accessToken : OAuthAccessToken): void;
    setDiscordUser?(user : OAuthDiscordUser): void;
    setIsLoggedIn?(isLoggedIn : boolean): void;
}


export interface OAuthAccessToken {
    accessToken : string;
    tokenType : string;
    expiresIn : number;
    refreshToken : string;
    scope : string;
}

export interface OAuthDiscordUser {
    id : string;
    username : string;
    discriminator : string;
    verified : boolean;
    email : string;
}