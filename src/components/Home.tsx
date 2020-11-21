import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Home.css";

export default class Home extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <Jumbotron>
                <Container>
                    <h1 className={"text-center display-4"}>Daily Princetonian 145th Managing Board Elections</h1>
                    <p className={"lead text-center"}>
                    Thank you for participating in The Daily Princetonian’s 2020 Editor-in-Chief election!
                    </p>
                    <hr/>
                    <p className={"intro-p"}>
                    On this site, you’ll find your personal ballot, as well as each candidate’s platform and pre-recorded speech.
                    If you have any questions or encounter technical difficulties, please contact Jon at <a href="mailto:jaort@princeton.edu">jaort@princeton.edu</a>.
                    </p>

                    <Button variant={"orange"} className={"text-center"} href={"#/vote"}>Vote Now!</Button>{' '}
                    <Button variant={"outline-orange"} className={"text-center"}
                            href={"#/meet-the-candidates"}>Meet the Candidates</Button>
                </Container>
            </Jumbotron>
        )
    }
}
