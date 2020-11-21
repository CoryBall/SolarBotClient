import React, { useContext } from 'react'
import Head from 'next/head'
import Center from '../../components/layout/center'
import { Container, Row } from 'react-bootstrap'
import { signin, useSession } from 'next-auth/client'
import DiscordLoginIcon from '../../components/icons/discordLogin'
import { StateContext } from '../../store'

interface AccountPageProps {

}

const AccountPage: React.FC<AccountPageProps> = ({}) => {
  const [session] = useSession()
  const [state, dispatch] = useContext(StateContext)

  if (!session) {
    return (
        <>
            Not signed in <br/>
            <button onClick={() => signin('discord')} className="border-0 bg-light">
                <DiscordLoginIcon height={60}/>
            </button>
        </>
    )
  }

  return (
        <>
            <Head>
                <title>Solar Bot / Account</title>
            </Head>
            <Center>
            <Container>
                <Row className="justify-content-center">
                    <h3>
                        {session?.user.name}
                        <br/>
                        {session?.accessToken}
                        <br/>
                        {accessToken}
                    </h3>
                </Row>
            </Container>
            </Center>
        </>
  )
}

export default AccountPage
