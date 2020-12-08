import React, { useContext } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
  signin, signout, useSession
} from 'next-auth/client'
import SolarBotLogo from '../icons/solarbotlogo'
import DiscordLoginIcon from '../icons/discordLogin'
import { useMeQuery } from '../../graphql/generatedtypes'
import Cookies from 'js-cookie'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const [session, isLoggedIn] = useSession()

  const cookieToken = Cookies.get('authToken')
  if (session && !cookieToken) {
    const { data, error, loading } = useMeQuery({
      variables: {
        token: session?.accessToken
      }
    })
    if (data?.me) {
      Cookies.set('authToken', data?.me?.accounts[0]?.accessToken)
      console.log('setting cookie')
    }
  }

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="border-bottom border-dark">
        <Navbar.Brand className="ml-4" href="/">
          <SolarBotLogo height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {!session && (
          <Nav className="ml-auto">
            <button
              onClick={() => signin('discord')}
              className="border-0 bg-light"
            >
              <DiscordLoginIcon height={60} />
            </button>
          </Nav>
          )}
          {session && (
          <Nav className="align-middle ml-auto">
            <img src={session.user.image} alt="discord avatar" className="rounded-circle mx-auto" style={{ height: 60, width: 60 }} />
            <NavDropdown id="collapsible-nav-dropdown" title={session.user.name} className="ml-3 m-auto text-center">
              <NavDropdown.Item href="/guilds">Guilds</NavDropdown.Item>
              <NavDropdown.Item onClick={async () => await signout()
              //   .then(async (_) => {
              //   await client.clearStore()
              // })
              }
              >
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          )}

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Header
