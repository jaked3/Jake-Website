import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {


  constructor(props) {
    super(props);
    this.state = {
      cEmail:'',
      cMessage:'',
      cName:'',
      cCompany:'',
      cPhone:''
    }
  }

  onEmailChange = (event) => {
  this.setState({cEmail: event.target.value})
}
  onMessageChange = (event) => {
  this.setState({cMessage: event.target.value})
}
  onCompanyChange = (event) => {
  this.setState({cCompany: event.target.value})
}
  onPhoneChange = (event) => {
  this.setState({cPhone: event.target.value})
}
 onNameChange = (event) => {
  this.setState({cName: event.target.value})
}


onSubmitContact = () => {
    fetch('http://localhost:3001/send', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.cEmail,
      name: this.state.cName,
      message: this.state.cMessage,
      company: this.state.cCompany,
      phone: this.state.cPhone

    })
  })
    console.log(this.state);

  }


render(){
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
                <input type="text" name="name" onChange = {this.onNameChange} />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" onChange = {this.onCompanyChange}/>
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" onChange = {this.onEmailChange} />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" onChange = {this.onPhoneChange}/>
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows={5} defaultValue={""} 
                onChange = {this.onMessageChange} />
              </p>
              <p className="full">
                <button onClick= {this.onSubmitContact}>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

    );


  }

  
}


export default Contact;