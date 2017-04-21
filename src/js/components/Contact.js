import React from 'react';

const Contact = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>Let's Chat</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-center">
          <svg style={{height: "10px"}}>
            <line strokeDasharray="0, 0" x1="50" y1="10" x2="400" y2="10"/>
          </svg>
        </div>
      </div>
      <div className="row tight">
        <div className="col-xs-12 text-center" style={{padding: "25px 0 0 0"}}>
          <div className="col-sm-6 col-xs-12">
            <h3>ryancskinner.com</h3>
            <h3>Brooklyn, New York</h3>
            <h3>(631)935-5575</h3>
            <h3>ryan.skinner1193@gmail.com</h3>
          </div>
          <div className="col-sm-6 col-xs-12" style={{paddingTop: "25px"}}>
            <form action="https://formspree.io/ryan.skinner1193@gmail.com"
                  method="POST">
              <div className="col-md-6 col-xs-12 form-group">
                <label>Your Name</label>
                <input name="name" className="form-control" id="formGroupExampleInput" placeholder="Your name here"/>
                <label>Your Email</label>
                <input type="email" name="email" className="form-control" id="formGroupExampleInput"
                       placeholder="Your email here"/>
              </div>
              <div className="col-md-6 col-xs-12 form-group">
                <label>Your Message</label>
                <textarea className="form-control" id="exampleTextarea" rows="3" name="message"
                          placeholder="Your message here"></textarea>
              </div>
              <button className="bttn-stretch" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;