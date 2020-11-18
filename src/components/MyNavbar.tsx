import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./styles/MyNavbar.css";
import {Container} from "react-bootstrap";

export default class MyNavbar extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Navbar variant={"dark"} expand={"lg"} sticky={"top"}>
                <Container>
                    <Navbar.Brand>Daily Princetonian Elections</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar"/>
                    <Navbar.Collapse id={"navbar"}>
                        <Nav className={"mr-auto"}>
                            <Nav.Link href={"#/"}>Home</Nav.Link>
                            <Nav.Link href={"#/meet-the-candidates"}>Meet the Candidates</Nav.Link>
                            <Nav.Link href={"#/vote"}>Vote</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
