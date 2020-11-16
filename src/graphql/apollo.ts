import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from "apollo-link-context";
import {useContext} from "react";
import {StateContext} from "../store";

const httpLink = createHttpLink({
    uri: `${process.env.SERVER_URL}/graphql`
})

const authLink = setContext((_, { headers }) => {
    const {accessToken} = useContext(StateContext);

    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink as any) as any,
    cache: new InMemoryCache()
})