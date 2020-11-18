import React from "react";
import {Container, Jumbotron} from "react-bootstrap";

import "./styles/Vote.css";

export default class Vote extends React.Component {

    render() {
        return (
            <Jumbotron>
                <Container fluid>
                    <h1 className={"text-center display-4 vote-title"}>Vote now!</h1>
                    <p className={"lead text-center"}>You can cast your vote for each office in the Google form below.
                        Not sure who to vote for? Check out
                        each candidate's platform <a href={"/meet-the-candidates"}>here</a>!</p>
                </Container>
            </Jumbotron>
        );
    }
}