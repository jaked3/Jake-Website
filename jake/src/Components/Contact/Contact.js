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
     alert('Thank you for your email! I hope to be in contact with you soon :).'); 
     console.log(this.state);
  
  

  }


render(){
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Contact Form</title>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" 
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
      <link rel="stylesheet" href="style.css" />
      <div className="container1">
        <h1 className='text-center f1 f-headline-l fw1 b'>Contact</h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Social Medias</h3>
            <div className='flexxx'>
                             
                 <a className="link near-black hover-silver dib mh3 tc" href="https://github.com/jaked3" title="GitHub">
                    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                     <span className="f6 db">GitHub</span>
                 </a>
              
              
                <a className="link hover-silver near-black dib mh3 tc" href="https://www.instagram.com/jakeduff3/?hl=en" title="Instagram">
                  <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
                  <span className="f6 db">Instagram</span>
                </a>
              
             
                <a className="link hover-silver near-black dib mh3 tc" href="https://ca.linkedin.com/in/jakeduff3" title="LinkedIn">
                  <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/></svg>
                  <span className="f6 db">LinkedIn</span>
                </a>
              
             
                               
              
            </div>
          </div>
          <div className="contact">
            <h3>Email:</h3>
           
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