import React from 'react';


const Navbar = () => {
return(

		<div>

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
		integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
		crossOrigin="anonymous"/>

		<div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
	 		<a className="navbar-brand btn">Jake</a>
	 		<button className="navbar-toggler" type="button" 
	 			data-toggle="collapse" data-target="#navbarNavDropdown" 
	 			aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	   		 	<span className="navbar-toggler-icon"></span>
	 		 </button>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			      <li className="nav-item active">
			        <a className="nav-link btn">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link btn">About</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link btn">Contact</a>
			      </li>
			      <li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle btn" id="navbarDropdownMenuLink" 
			        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			         Projects
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			          <a className="dropdown-item btn">Action</a>
			          <a className="dropdown-item btn">Another action</a>
			          <a className="dropdown-item btn">Something else here</a>
		        </div>
     		 </li>
   		 </ul>
  		</div>
		</nav>

		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
		integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
		crossOrigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" 
		integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" 
		crossOrigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
		 integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" 
		 crossOrigin="anonymous"></script>

		</div>



		</div>

	);
	
}


export default Navbar;