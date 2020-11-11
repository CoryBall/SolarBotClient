import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.scss';
import React from "react";
import type {AppProps} from "next/app";
import Head from "next/head";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import {StateProvider} from "../store";

const MyApp = ({Component, pageProps}: AppProps) => (
    <StateProvider>
        <div className="bg-light vh-100 vw-100">
            <Head>
                <title>Solar Bot</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="h-100">
                <Header/>
                <Component/>
                <Footer />
            </div>
        </div>
    </StateProvider>
)

export default MyApp;