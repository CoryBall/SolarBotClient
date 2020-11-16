import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.scss';
import React from "react";
import type {AppProps} from "next/app";
import Head from "next/head";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import {Provider as NextAuthProvider} from "next-auth/client";

const MyApp : React.FC<AppProps> = ({Component, pageProps}: AppProps) => (
    <NextAuthProvider session={pageProps.session}>
        <div className="bg-light vh-100 vw-100">
            <Head>
                <title>Solar Bot</title>
                <link rel="icon" href="/src/assets/favicon/favicon.ico"/>
            </Head>
            <div className="h-100">
                <Header/>
                <Component {...pageProps} />
                <Footer />
            </div>
        </div>
    </NextAuthProvider>
)

export default MyApp;