import React,{useState} from "react";
import "./sideNavbar.scss";
import {NavLink} from "react-router-dom";

//icons
import MenuIcon from '@material-ui/icons/Menu';

//components
// import Modal2 from "../modal/Modal2/modal2";
// import Modal from "../modal/modal";

const SideNavbar= (props)=>{
    const [showMenu, setShowMenu]= useState(false);

    return(
        <nav>

        
            <div className="col-xl-2 col-xs-2 navigation">
                <NavLink to="/" activeClassName="highlight-link" exact={true}><p className="myName">Mark Calvario</p></NavLink>
                <div className="alignRight">
                    <div className="myNameSection">
                        <span><NavLink to="/" activeClassName="highlight-link" exact={true}>Mark Calvario</NavLink></span>
                    </div>
                    <MenuIcon className="hamburger-icon" onClick={()=>setShowMenu(!showMenu)}/>
                </div>
                
                <div className="nav-menu">
                    {/* For large screens */}
                    <ul className="xl-screen">
                        <li><NavLink to="/about" activeClassName="highlight-link">About</NavLink></li>
                        <li><NavLink to="/bowls" activeClassName="highlight-link">Bowls</NavLink></li>
                        <li><NavLink to="/cups" activeClassName="highlight-link">Cups</NavLink></li>
                        <li><NavLink to="/liddedjars" activeClassName="highlight-link">Lidded Jars</NavLink></li>
                        <li><NavLink to="/teapots" activeClassName="highlight-link">Teapots</NavLink></li>
                        <li><NavLink to="/vases" activeClassName="highlight-link">Vases I</NavLink></li>
                        <li><NavLink to="/vases2" activeClassName="highlight-link">Vases II</NavLink></li>
                        <li><NavLink to="/vases3" activeClassName="highlight-link">Vases III</NavLink></li>
                    </ul>
                </div>      
            </div>

            {/* Nav for smaller screens */}
            <div className={showMenu? "background-nav show-background":"background-nav hide-background"}>
                <ul className={showMenu? "side-nav slideMenuIn":"side-nav slideMenuOut" }>
                    <li><NavLink to="/about" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">About</NavLink></li>
                    <li><NavLink to="/bowls" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Bowls</NavLink></li>
                    <li><NavLink to="/cups" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Cups</NavLink></li>
                    <li><NavLink to="/liddedjars" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Lidded Jars</NavLink></li>
                    <li><NavLink to="/teapots" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Teapots</NavLink></li>
                    <li><NavLink to="/vases" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Vases I</NavLink></li>
                    <li><NavLink to="/vases2" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Vases II</NavLink></li>
                    <li><NavLink to="/vases3" onClick={()=>setShowMenu(!showMenu)} activeClassName="highlight-link">Vases III</NavLink></li>
                </ul>
            </div>
           
        </nav>
    )
}

export default SideNavbar;