import React, {Component} from "react";
//Stateless functional component
//but on function component props must be a parameter , & don't use this
const NavBar = ({totalCounters}) => {
    return(
        <nav className="navbar bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="#">Navbar {" "}<span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
</div>
</nav>
    )
}

// class NavBar extends Component{
//     render(){
        
// }

export default NavBar
