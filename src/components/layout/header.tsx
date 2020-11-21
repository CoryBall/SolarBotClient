import React, { useContext } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
  getSession, signin, signout, useSession
} from 'next-auth/client'
import SolarBotLogo from '../icons/solarbotlogo'
import DiscordLoginIcon from '../icons/discordLogin'
import { StateContext, StateProvider } from '../../store'
import { client } from '../../graphql/apollo'
import { Actions } from '../../store/actions'

interface HeaderProps {

}

function discordLogin () {

}

const Header: React.FC<HeaderProps> = ({}) => {
  const [session, isLoggedIn] = useSession()

  const { state, dispatch } = useContext(StateContext)

  if (session && state.accessToken === '') {
    console.log(session)
    console.log(session?.user)
    console.log(session?.accessToken)
    dispatch({ type: Actions.setAccessToken, payload: session?.accessToken })
    console.log(state.accessToken)
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
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              <NavDropdown.Item onClick={async () => await signout().then(async (_) => {
                await client.clearStore()
              })}
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
