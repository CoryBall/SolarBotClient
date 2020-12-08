import React from 'react'
import Head from 'next/head'
import { Col, Container, DropdownButton, Dropdown, Row } from 'react-bootstrap'
import { signin, useSession } from 'next-auth/client'
import DiscordLoginIcon from '../../components/icons/discordLogin'
import { DiscordGuild, useAllGuildsQuery } from '../../graphql/generatedtypes'
import { Stylesheet } from '../../utils/types'

interface GuildsPageProps {

}

const GuildsPage: React.FC<GuildsPageProps> = ({}) => {
  const [session] = useSession()

  const { data, error } = useAllGuildsQuery()

  console.log('data', data)
  console.log('error', error)

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

  const guildItem = (guild: DiscordGuild) => (
    <Container className="mt-4 bg-dark rounded-pill" style={styles.guildRow}>
      <Row className="h-100">
        <Col xs={2} className="text-center my-auto">
          {guild.icon
            ? <img src={guild.icon} alt={`${guild.name} icon`} className="rounded-circle mx-auto" style={{ height: 60, width: 60 }} />
            : <h2 className="rounded-circle m-auto text-light" style={{ height: 60, width: 60 }} >
              {guild.name.split(' ').map((split) => {
                return split[0]
              })}
            </h2>
          }
        </Col>
        <Col xs={8} className="text-light my-auto">
          <h2>
            {guild.name}
          </h2>
        </Col>
        <Col xs={2} className="text-light my-auto">
          {guild.owner
            ? <DropdownButton className="mx-auto" style={styles.optionsButton} title="Options" id={`guilddropdown${guild.id}`}>
              <Dropdown.Item href={`guild/${guild.id}`}>Details</Dropdown.Item>
              <Dropdown.Item href={`guild/${guild.id}/members`}>Members</Dropdown.Item>
            </DropdownButton>
            : <h3 className="text-danger">
              Not Owner
            </h3>
          }
        </Col>
      </Row>
    </Container>
  )

  return (
        <>
            <Head>
                <title>Solar Bot / Guilds</title>
            </Head>
          <Container style={styles.spacer}/>
            <Container style={styles.container} fluid>
                  <Container className="w-75 mx-auto mb-5" style={styles.centerUser} fluid>
                    <Row style={styles.userInfo}>
                      <span className="mx-auto">
                        Guilds
                      </span>
                    </Row>
                  </Container>
                  <Container className="justify-content-center w-75 mx-auto" style={styles.guildList}>
                    {data?.guilds.map((guild: DiscordGuild) => (
                      guildItem(guild)
                    )
                    )}
                  </Container>

            </Container>
            {/* <Center> */}

            {/* </Center> */}
        </>
  )
}

export default GuildsPage

const styles: Stylesheet = {
  spacer: {
    height: '150px'
  },
  container: {
    height: '100%'
  },
  userInfo: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 'bolder'
  },
  guildRow: {
    height: '100px'
  },
  guildName: {
    fontFamily: 'Roboto'
  },
  optionsButton: {
    width: '90%'
  }
}
