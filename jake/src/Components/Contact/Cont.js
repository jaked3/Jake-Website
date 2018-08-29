
import React from 'react';

const Cont = () => {

return (

<div action="/contact" id="contact-form" method="post" role="form">
  <fieldset>
    <label htmlFor="name">Name *</label>
    <input id="name" name="name" type="text" placeholder="Your name" required="required" />
    <label htmlFor="email">Email *</label>
    <input id="email" name="email" type="text" placeholder="Your email" required="required" />
    <label htmlFor="message">Message *</label>
    <textarea id="message" name="message" placeholder="Enter your message here" rows={3} required="required" defaultValue={""} />
    <button type="submit">Submit</button>
  </fieldset>
</div>
);
}










export default Cont;