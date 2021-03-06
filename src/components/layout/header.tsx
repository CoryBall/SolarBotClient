import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
  signin, signout, useSession
} from 'next-auth/client'
import SolarBotLogo from '../icons/solarbotlogo'
import DiscordLoginIcon from '../icons/discordLogin'
import { useMeLazyQuery } from '../../graphql/generatedtypes'
import useApp from '../../context'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const [session] = useSession()

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
