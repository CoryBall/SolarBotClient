import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import {setContext} from "apollo-link-context";
import {from} from 'apollo-link';
import {useContext} from "react";
import {StateContext} from "../store";



const authMiddleware = setContext((_, { headers }) => {
    const {accessToken} = useContext(StateContext);

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${accessToken}` || null,
        }
    };
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql', headers: authMiddleware });



// const apolloClient = new ApolloClient({
//     link: httpLink,
// });