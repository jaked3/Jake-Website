import React from 'react';
import './About.css';
import 'tachyons';

const About = () => {

return (
	
	<article className="athelas">
	  <div className="vh-100 dt w-100 tc bg-dark-gray white cover about2" >
	    <div className="dtc v-mid">
	      <header className="white-70">
	        <h2 className="f6 fw1 ttu tracked mb2 lh-title"></h2>
	        <h3 className="f6 fw1 lh-title"></h3>
	      </header>
	      <h1 className="f1 f-headline-l fw1 i white-60">Get To Know Me</h1>
	      <blockquote className="ph0 mh0 measure f4 lh-copy center">
	        <p className="fw1 white-70">
	          We are limited not by our abilities but by our vision.
	        </p>
	        <cite className="f6 ttu tracked fs-normal">Jake Duff</cite>
	      </blockquote>
	    </div>
	  </div>
	  <div className="center measure-wide f5 pv5 lh-copy ph2">
	    <h1 className="f1 lh-title">My Story</h1>
	    <p>
	      I grew up in Canada and spent most of my youth as a passionate competitive hockey player.
		 Hockey has motivated me to pursue a degree in Biomedical and Mechanical Engineering 
		 in hopes to one day work in a field related to sports. 
		 </p>

		 <p>Despite my field of study, 
		 I am fascinated in Web Application Design as well as Mobile Application Design. Most of my 
		 life consists of studying for my engineering degree, playing hockey and programming.In my free time I
		 enjoy keeping an active social environment by hanging out with my friends or bartending partime at the local bar. 
		 </p>

		 <p>
		 	I am always looking for ways to advance his career and interests. 
			If you would like to find out more please refer to the "Projects" section of this site to see some of my
			Mechanical, Web App and Mobile App projects. 
		   </p>
	   
	    
	  </div>
	</article>



	);
}


export default About;

