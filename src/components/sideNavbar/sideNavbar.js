import React from "react";
import "./sideNavbar.scss"
import {Link} from "react-router-dom"

const SideNavbar= (props)=>{
    return(
        <div className="col-xs-2 col-xl-2 navigation">
            <Link to="/"><h4>Mark Calvario</h4></Link>
            <div className="nav-menu">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/bowls">Bowls</Link></li>
                    <li><Link to="/cups">Cups</Link></li>
                    <li><Link to="/liddedjars">Lidded Jars</Link></li>
                    <li><Link to="/teapots">Teapots</Link></li>
                    <li><Link to="vases">Vases</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavbar;