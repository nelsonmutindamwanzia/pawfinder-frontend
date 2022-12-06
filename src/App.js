import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
// import Cards from "./components/Cards";
// import DestinationDetails from "./components/pages/DestinationDetails";
import Signup from './components/Signup'
import Login from "./components/Login";
import Footer from './components/Footer';
import AddMissingPet from './components/pages/AddMissingPet';
import AboutContact from './components/pages/AboutContact';


function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component = {Home} ></Route>
            <Route path="/about" exact component = {AboutContact} ></Route>
            <Route path="/contacts" exact component = {AboutContact} ></Route>
            <Route path="/add-missing-pet" exact component = {AddMissingPet} ></Route>
            <Route path="/login" exact component = {Login} ></Route>
            <Route path="/signup" exact component = {Signup} ></Route>
          </Switch>
          <Footer />
        </Router>
    </>
  )
}

export default App;