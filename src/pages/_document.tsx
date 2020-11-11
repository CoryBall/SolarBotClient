import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document<{}> {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => App,
                enhanceComponent: (Component) => Component,
            })

        return await Document.getInitialProps(ctx)
    }

    public render() {
        return (
            <Html lang='en-US'>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>

            </Html>
        );
    }
}
