import React from 'react';
import './Web.css';
import 'tachyons';



const Web = () => {

return (


<section className="mw7 center avenir">
  <h2 className="baskerville fw1 ph3 ph0-l">Web Applications</h2>
  <article className="bt bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="http://localhost:3000">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns"><img
        src={require('./jakepage.JPG')} 
          className="db" 
          alt="Jake's Webpage"/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">Jake's Personal Web App</h1>
          <p className="f6 f5-l lh-copy">
            This web application was programmed with JavaScript and uses the React library with various npm packages such as tachyons for styling and particle.js for the dynamic background. The front end is connected to a server using Node.js and Express which allows post requests for the contact page of this web application.</p>
        </div>
      </div>
    </a>
  </article>
  <article  className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim"
   	href="https://facial-detection.herokuapp.com/">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={require('./facedetect.PNG')}
          className="db" alt="Facial Detection Application"/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">Facial Detection Application</h1>
          <p className="f6 f5-l lh-copy">
           	This application allows the user to register or sign in with an account that is updated in a database. Once signed in the user can find any image online and using the Clarifai API the application will detect the clearest human face in the image. This application uses npm package bcrypt to hash the user passwords in the database. The front end of this application uses the React library and programming with JavaScript, HTML and CSS. The server side uses Node.JS and Express. The database used for this application is PostgreSQL.
          </p>
        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="https://robohash.org/">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={require('./robot.PNG')}
          className="db" alt="Robot App"/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">React Search Engine App</h1>
          <p className="f6 f5-l lh-copy">
            React application that uses Robohash API to generate different robot images with data. The search engine allows you to search robots and corresponding information.          </p>
        </div>
      </div>
    </a>
  </article>
</section>

);

}

export default Web;