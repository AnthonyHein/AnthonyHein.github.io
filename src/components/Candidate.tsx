import React from "react";
import {Button, ButtonGroup, Col, Image} from "react-bootstrap";

import "./styles/Candidate.css";
import ReactAudioPlayer from "react-audio-player";
import {Document, Page, pdfjs} from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IProps {
    name: string,
    imagePath: string,
    platformPath: string,
    recordingPath: string,

}

interface IState {
    numPages: number,
    pageNum: number
}

export default class Candidate extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            numPages: 0,
            pageNum: 1
        }

        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // @ts-ignore
    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages: numPages})
    }

    handleClick = (e: any) => {
        e.preventDefault();

        switch (e.target.id) {
            case "next-page":
                if (this.state.pageNum + 1 > this.state.numPages) return;
                this.setState(prevState => ({pageNum: prevState.pageNum + 1}));
                break;
            case "prev-page":
                if (this.state.pageNum - 1 < 0) return;
                this.setState(prevState => ({pageNum: prevState.pageNum - 1}));
        }
    }

    render() {
        // @ts-ignore
        return (
            <Col xs={12} className={"candidate"}>
                <div className={"details"}>
                    <div className="flex-item left">
                        <h3 className={"name"}>{this.props.name}</h3>
                        <Image src={this.props.imagePath} className={"candidate-image"}/>
                        <ReactAudioPlayer src={this.props.recordingPath} controls/>
                    </div>
                    <div className={"flex-item"}>
                        <div className={"doc"}>
                            <ButtonGroup className={"button-group"} aria-label="Basic example">
                                <Button variant="orange" id={"prev-page"} onClick={this.handleClick}>&#8592;</Button>
                                <Button variant="light"
                                        disabled>Page {this.state.pageNum} of {this.state.numPages}</Button>
                                <Button variant="orange" id={"next-page"} onClick={this.handleClick}>&#8594;</Button>
                            </ButtonGroup>
                            <Document file={this.props.platformPath}
                                      onLoadSuccess={this.onDocumentLoadSuccess} onLoadError={console.error}>
                                <Page pageNumber={this.state.pageNum} scale={1.5}/>
                            </Document>
                            <ButtonGroup className={"button-group"} aria-label="Basic example">
                                <Button variant="orange" id={"prev-page"} onClick={this.handleClick}>&#8592;</Button>
                                <Button variant="light"
                                        disabled>Page {this.state.pageNum} of {this.state.numPages}</Button>
                                <Button variant="orange" id={"next-page"} onClick={this.handleClick}>&#8594;</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}
