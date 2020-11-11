import React, {useContext} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import SolarBotLogo from "../solarbotlogo";
import {StateContext} from "../../store";

interface HeaderProps {

}


const Header: React.FC<HeaderProps> = ({}) => {
    const {user, isLoggedIn} = useContext(StateContext);

    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="border-bottom border-dark">
                <Navbar.Brand className="ml-4" href="/">
                    <SolarBotLogo height={80}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/*<Nav className=".d-block .d-md-none">*/}
                    {/*    <Nav.Link href="/account">{user.username}</Nav.Link>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
                <Nav className=".d-none .d-lg-block">
                    <Nav.Link href="/account">{user.username}</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;