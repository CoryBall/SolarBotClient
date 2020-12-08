import 'bootstrap/dist/css/bootstrap.min.css'
import '../app.scss'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../graphql/apollo'
import { AppProvider } from '../context'

function MyApp ({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps?.initialApolloState)

  return (
          <ApolloProvider client={apolloClient}>
              <AppProvider>
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
              </AppProvider>
          </ApolloProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {}

  // const token = Cookies.setItem('authToken')

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps
  }
}

export default MyApp
