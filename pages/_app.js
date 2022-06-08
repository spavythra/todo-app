import React from 'react';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "../public/components/Common/Loading";
import {Provider} from "react-redux";
import Wait from "../Wait";
import Head from "next/head";
import Layout from "../public/layout/Layout";
import App from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor}  from "../public/store";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        await Wait(100)
        setLoading(false);

        const handleStart = async (url) => {
            if (url !== router.pathname)
                setLoading(true)
            await Wait(100)
            setLoading(false);
        };
        const handleComplete = async (url) => {
            await Wait(100)
            setLoading(false)
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);


    }, [router]);

    return (
        <>
            <Head>
                <title>MyTo-do App</title>
                <meta charSet="UTF-8"/>
                
                <link rel="stylesheet" href="/styles/style.css"/>
            </Head>

            <LoadingScreen loading={loading} />
            { !loading && <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>}

        </>
    );
}


export default MyApp;
