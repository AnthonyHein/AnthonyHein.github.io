import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
                    <Route path={"/meet-the-candidates"}><Candidates /></Route>
                    <Route path={"/vote"}><Vote /></Route>
                    <Route path={"/"}><Candidates /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
