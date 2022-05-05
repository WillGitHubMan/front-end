import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './home';
import User from './user';
const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path = "/user" element = {<User />} />
            </Routes>
        </Router>
    );
};
export default Webpages;