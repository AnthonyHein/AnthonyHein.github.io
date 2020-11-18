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
                    <p className={"lead text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                        commodo ipsum. Sed ullamcorper ligula et malesuada efficitur.</p>
                    <hr/>
                    <p className={"intro-p"}>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia curae;
                        Vestibulum mi nulla, gravida ac mi sed, tincidunt feugiat sapien. Morbi elementum felis nec
                        ullamcorper laoreet. Praesent efficitur lobortis orci feugiat pretium. Donec maximus dictum
                        tellus. Curabitur sollicitudin nisl a sapien tempor, ut euismod nibh feugiat. Donec non
                        efficitur nisl. Vestibulum congue libero nec mollis laoreet. Aliquam dictum arcu tellus,
                        malesuada hendrerit sapien placerat eget. Duis faucibus vel sapien at feugiat. Donec nunc orci,
                        gravida non sapien nec, lacinia dapibus sem. Nam fermentum fringilla mi id tincidunt.
                        Pellentesque hendrerit, nulla in finibus lobortis, risus ligula iaculis enim, ut feugiat massa
                        nunc vel arcu. Vestibulum eu fermentum dui, at congue felis. Duis faucibus felis tellus.
                    </p>

                    <Button variant={"orange"} className={"text-center"} href={"/vote"}>Vote Now!</Button>{' '}
                    <Button variant={"outline-orange"} className={"text-center"}
                            href={"/meet-the-candidates"}>Meet the Candidates</Button>
                </Container>
            </Jumbotron>
        )
    }
}