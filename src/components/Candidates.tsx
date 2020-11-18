import React from "react";

import {listOfCandidates} from "../candidates";
import {Col, Container, Row} from "react-bootstrap";
import Candidate from "./Candidate";
import "./styles/Candidates.css";
import Sidebar from "./Sidebar";

export default class Candidates extends React.Component {

    constructor(props: any) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e: any) {
        e.preventDefault();

        window.scroll({
            behavior: "smooth",
            top: e.offset.top - 10000
        })
    }

    render() {

        // let positionNames: string[] = [];
        // let peopleForThatPosition: Candidate[] = [];
        // let allCandidates: JSX.Element[] = [];
        // let navLinks: JSX.Element[] = [];
        //
        // for (let position of listOfCandidates) {
        //     positionNames.push(position.position)
        //
        //     let temp: any = [];
        //     for (let person of position.candidates) {
        //         temp.push(<Candidate name={person.name} imagePath={person.imagePath} statement={person.statement}/>);
        //     }
        //
        //     peopleForThatPosition.push(temp);
        // }
        // for (let i = 0; i < positionNames.length; i++) {
        //     allCandidates.push(
        //         <section id={positionNames[i]}>
        //             <h2>{positionNames[i]}</h2>
        //             <Row>
        //                 {peopleForThatPosition[i]}
        //             </Row>
        //         </section>
        //     );
        //
        //     navLinks.push(<li className={"position"}><a href={"#" + positionNames[i]}>{positionNames[i]}</a></li>);
        // }

        let personNames: any[] = [];
        let allCandidates: any[] = [];
        let navLinks: any[] = [];

        for (let person of listOfCandidates) {
            personNames.push(person.name);
            allCandidates.push(
                <>
                    <div className={"fake-div"} id={person.name}/>
                    <section>
                        <Row>
                            <Candidate name={person.name} imagePath={person.imagePath}
                                       recordingPath={person.recordingPath}
                                       platformPath={person.platformPath}/>
                        </Row>
                    </section>
                </>
            );
            navLinks.push(<li className="person"><a href={"#" + person.name}>{person.name}</a></li>);
        }

        return (
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <Sidebar navLinks={navLinks} personNames={personNames}/>
                    </Col>
                    <Col xs={10}>
                        <main className={"content"}>
                            <h2 className={"display-4 title"}>Meet the Candidates</h2>
                            <p className={""}>
                                Here you can see all the candidates who are running,
                                listen to their introductory speeches, and read their platforms.
                            </p>
                            {allCandidates}
                            <p>
                              Use the sidebar to view other candidates!
                            </p>
                        </main>
                    </Col>
                </Row>

            </Container>
        );
    }
}
