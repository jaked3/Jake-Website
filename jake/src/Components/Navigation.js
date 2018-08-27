import React from 'react';


const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => {this.showDropdown(e)}}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

const Navigation = ({onRouteChange}) => {

	return(
		<div>
		 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  			<a className="navbar-brand" href="/">Jake</a>

 			 <button className="navbar-toggler" type="button" 
 			 data-toggle="collapse" data-target="#navbarNavDropdown"
 			  aria-controls="navbarNavDropdown" aria-expanded="false" 
 			  aria-label="Toggle navigation">
   				 <span className="navbar-toggler-icon"></span>
 			 </button>


			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav">


            <NavItem path="/" name="Home" onClick={() => console.log("home")}/>
			      <NavItem path="/About" name="About" 
            onClick={() => onRouteChange('About')}/>
			      <NavItem path="/Contact" name="Contact" />
			       


			      <NavDropdown name="Projects">
                <a className="dropdown-item" href="/MechEng">Mechanical Engineering</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/WebDev">Web Developement</a>              
                <a className="dropdown-item" href="/Mobile">Mobile Apps</a>
             </NavDropdown>

			    </ul>
			  </div>
			</nav>
 		</div>

	);

}



export default Navigation;

//https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0