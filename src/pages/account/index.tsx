import React from 'react';
import Head from "next/head";
import Center from "../../components/layout/center";
import {Container, Row} from "react-bootstrap";
import {signin, useSession} from "next-auth/client";
import DiscordLoginIcon from "../../components/icons/discordLogin";


interface AccountPageProps {

}


const AccountPage: React.FC<AccountPageProps> = ({}) => {
    const [session] = useSession();

    console.log(session);

    if (!session) return (
        <>
            Not signed in <br/>
            <button onClick={() => signin('discord')} className="border-0 bg-light">
                <DiscordLoginIcon height={60}/>
            </button>
        </>
    )

    return (
        <>
            <Head>
                <title>Solar Bot / Account</title>
            </Head>
            <Center>
            <Container>
                <Row className="justify-content-center">
                    <h3>
                        {session?.user.name} {session?.accessToken}
                    </h3>
                </Row>
            </Container>
            hello
            </Center>
        </>
    )
}

export default AccountPage;