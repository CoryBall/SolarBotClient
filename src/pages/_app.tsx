import 'bootstrap/dist/css/bootstrap.min.css'
import '../app.scss'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import { getSession, Provider as NextAuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import useApp, { AppProvider } from '../context'
import { useApollo } from '../utils/apollo'

function MyApp ({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const { accessToken } = useApp()

  React.useEffect(() => {
    console.log('in useEffect')
    async function execute () {
      const session = await getSession()
      console.log(session?.accessToken)
    }
    execute()
    // console.log('in useEffect')
    // if (!accessToken) {
    //   try {
    //     getMe({
    //       variables: {
    //         token: session?.accessToken
    //       }
    //     })
    //     if (data?.me?.accounts[0]?.accessToken) {
    //       console.log('accessToken: ', data?.me?.accounts)
    //       setAccessToken(data?.me?.accounts[0]?.accessToken)
    //     }
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }, [getSession, accessToken])

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

export default MyApp
