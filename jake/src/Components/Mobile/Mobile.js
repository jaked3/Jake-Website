import React from 'react';
import 'tachyons';



const Mobile = () => {

return (
	<section className="mw7 center avenir">
	 <h2 className="baskerville fw1 ph3 ph0-l">Mobile Applications</h2>
	  <article className="bt bb b--black-10">
	    <a className="db pv4 ph3 ph0-l no-underline black dim" href="https://unity3d.com/">
	      <div className="flex flex-column flex-row-ns">
	        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns"><img
	        src={require('./unity.png')} 
	          className="db" 
	          alt="Unity Logo"/>
	        </div>
	        <div className="w-100 w-60-ns pl3-ns">
	          <h1 className="f3 fw1 baskerville mt0 lh-title">Unity Android & IOS Application</h1>
	          <p className="f6 f5-l lh-copy">
	         Android and IOS mobile application coming soon.... This application is a mobile game that was programmed in C# using the Unity engine.
	            </p>
	        </div>
	      </div>
	    </a>
	  </article>
	  </section>
  );

}

export default Mobile;