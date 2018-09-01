import React from 'react';
import './Mech.css';
import 'tachyons';



const Mech = () => {

return (
	<section className="mw7 center avenir">
	 <h2 className="baskerville fw1 ph3 ph0-l">Mechanical Engineering Projects</h2>
	  <article className="bt bb b--black-10">
	    <a className="db pv4 ph3 ph0-l no-underline black dim" href="http://localhost:3000/Mech/">
	      <div className="flex flex-column flex-row-ns">
	        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns"><img
	        src={require('./keg.jpg')} 
	          className="db" 
	          alt="Photo of a dimly lit room with a computer interface terminal."/>
	        </div>
	        <div className="w-100 w-60-ns pl3-ns">
	          <h1 className="f3 fw1 baskerville mt0 lh-title">March Networks MAP-K</h1>
	          <p className="f6 f5-l lh-copy">
	          The March Networks MAP-K (Motion Activated Party Keg) was a student “hack-day” project I worked on while on an internship with March Networks. The MAPK serves purpose to detect motion when you and your friends raise your body and cheer. From watching the winning championship hockey game to FIFA world cup, the MAPK will always be there to capture the moment. The camera on top of the keg detects motion at an area the user may calibrate themselves. Once motions detection occurs a red party light will flash, and the user’s customizable song will play. My main contribution to this project was the mechanical design of the keg and all the features. My design consisted of a total of four 3D printed parts and one sheet metal part. Once the project was complete my team and I presented our idea and prototype model to the leadership team and other members of the company. 
	            </p>
	        </div>
	      </div>
	    </a>
	  </article>
	  </section>
  );

}

export default Mech;