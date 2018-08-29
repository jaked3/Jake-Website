import React from 'react';
import './Contact.css'


const Contact = () => {

return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Acme Web Design</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <h1 className="brand"><span>Acme</span> Web Design</h1>
    <div className="wrapper animated bounceInLeft">
      <div className="company-info">
        <h3>Acme Web Design</h3>
        <ul>
          <li><i className="fa fa-road" /> 44 Something st</li>
          <li><i className="fa fa-phone" /> (555) 555-5555</li>
          <li><i className="fa fa-envelope" /> test@acme.test</li>
        </ul>
      </div>
      <div className="contact">
        <h3>Email Us</h3>
        <form>
          <p>
            <label>Name</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" />
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" />
          </p>
          <p className="full">
            <label>Message</label>
            <textarea name="message" rows={5} defaultValue={""} />
          </p>
          <p className="full">
            <button>Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

	);
}


export default Contact;