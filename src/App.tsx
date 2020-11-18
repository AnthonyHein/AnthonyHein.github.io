import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Candidates from "./components/Candidates";
import Vote from "./components/Vote";

function App() {
    return (
        <div className="App">
            <Router>
                <MyNavbar/>

                <Switch>
                    <Route path={"/meet-the-candidates"} ><Candidates /></Route>
                    <Route path={"/vote"}><Vote /></Route>
                    <Route path={"/"}><Home /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
