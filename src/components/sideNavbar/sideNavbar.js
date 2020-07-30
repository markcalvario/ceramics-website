import React,{useState} from "react";
import "./sideNavbar.scss";
import {Link} from "react-router-dom";

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
                <Link to="/"><h4 className="myName">Mark Calvario</h4></Link>
                <div className="alignRight">
                    <div className="myNameSection">
                        <span><Link to="/">Mark Calvario</Link></span>
                    </div>
                    <MenuIcon className="hamburger-icon" onClick={()=>setShowMenu(!showMenu)}/>
                </div>
                
                <div className="nav-menu">
                    {/* For large screens */}
                    <ul className="xl-screen">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/bowls">Bowls</Link></li>
                        <li><Link to="/cups">Cups</Link></li>
                        <li><Link to="/liddedjars">Lidded Jars</Link></li>
                        <li><Link to="/teapots">Teapots</Link></li>
                        <li><Link to="/vases">Vases I</Link></li>
                        <li><Link to="/vases2">Vases II</Link></li>
                        <li><Link to="/vases3">Vases III</Link></li>
                    </ul>
                </div>      
            </div>

            {/* Nav for smaller screens */}
            <div className={showMenu? "background-nav show-background":"background-nav hide-background"}>
                <ul className={showMenu? "side-nav slideMenuIn":"side-nav slideMenuOut" }>
                    <li><Link to="/about" onClick={()=>setShowMenu(!showMenu)}>About</Link></li>
                    <li><Link to="/bowls" onClick={()=>setShowMenu(!showMenu)}>Bowls</Link></li>
                    <li><Link to="/cups" onClick={()=>setShowMenu(!showMenu)}>Cups</Link></li>
                    <li><Link to="/liddedjars" onClick={()=>setShowMenu(!showMenu)}>Lidded Jars</Link></li>
                    <li><Link to="/teapots" onClick={()=>setShowMenu(!showMenu)}>Teapots</Link></li>
                    <li><Link to="/vases" onClick={()=>setShowMenu(!showMenu)}>Vases I</Link></li>
                    <li><Link to="/vases2" onClick={()=>setShowMenu(!showMenu)}>Vases II</Link></li>
                    <li><Link to="/vases3" onClick={()=>setShowMenu(!showMenu)}>Vases III</Link></li>
                </ul>
            </div>
           
        </nav>
    )
}

export default SideNavbar;