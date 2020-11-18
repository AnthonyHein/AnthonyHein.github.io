import Scrollspy from "react-scrollspy";
import React from "react";
import "./styles/Sidebar.css";

interface IProps {
    personNames: string[];
    navLinks: JSX.Element[];
}

export default class Sidebar extends React.Component<IProps> {


    render() {

        return (
        <div className={"sidebar"}>
            <h4 className={"text-center sidebar-header"}>Candidates</h4>
            <Scrollspy items={this.props.personNames} currentClassName={"isActive"}>
                {this.props.navLinks}
            </Scrollspy>
        </div>
        );
    }

}
