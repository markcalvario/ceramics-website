import React from 'react';
import "./App.css"
import {Switch,BrowserRouter, Route} from "react-router-dom";

//components
import SideNavbar from "./components/sideNavbar/sideNavbar";
import About from "./components/about/about";
import Bowls from "./components/bowls/bowls";
import Cups from "./components/cups/cups";
// import Modal from "./components/modal/modal";
import Teapots from "./components/teapots/teapots";
import Vases from "./components/vases/vases";
import Vases2 from "./components/vases2/vases2";
import Vases3 from "./components/vases3/vases3";
import LiddedJars from './components/liddedJars/liddedJars';



const App = (props) => {
  
  return (
    <React.Fragment>
      <div className="container-fluid main-layout">
        
        <BrowserRouter>
          <Switch>
                <Route exact path="/" render={()=>(
                  <div className="row ">
                    <SideNavbar/>
                    <div className="col-xs-1 col-xl-7 ceramicsContent" >
                    </div>
                  </div>
                )} />
                <Route path="/about" 
                render={()=> (
                  <div className="row">
                    <SideNavbar/>
                    <About/>
                  </div>
                )} />
                <Route path="/bowls"
                render={()=>  (
                  <div className="row">
                    <SideNavbar/>
                    <Bowls/>
                  </div>
                )} />
                <Route path="/cups" 
                render={()=> (
                  <div className="row">
                    <SideNavbar/>
                    <Cups/>
                  </div>
                )} />
                <Route path="/liddedjars" 
                render={()=> (
                  <div className="row">
                    <SideNavbar/>
                    <LiddedJars/>
                  </div>
                )} />
                <Route path="/teapots" render={()=>(
                  <div className="row">
                    <SideNavbar/>
                    <Teapots/>
                  </div>
                )} />
                <Route path="/vases" render={()=>(
                  <div className="row">
                    <SideNavbar/>
                    <Vases/>
                </div>
                )} />
                <Route path="/vases2" render={()=>(
                  <div className="row">
                    <SideNavbar/>
                    <Vases2/>
                </div>
                )} />
                <Route path="/vases3" render={()=>(
                  <div className="row">
                    <SideNavbar/>
                    <Vases3/>
                </div>
                )} />
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
