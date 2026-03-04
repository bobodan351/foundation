import React from "react";
import Nav from "./Nav";
import ImagePreview from "./ImagePreview";

const Contact = () => {
  return (
    <div className="App">
      <Nav />
		  <div>
			  <ImagePreview name={'Contact Us'}/>
        <section className="contact-section">
          <div className="contact-info"	>
					  <h1 className="contact-info-header">Get In Touch</h1>
					  <span className="span-after"></span>
            <p>
              We would love to hear from you! Please fill out the form and we
              will get back to you as soon as possible.
					  </p>
					  <p>Phone: (123) 456-78908888</p>
					  <p>Email:info@charityorg.org</p>
					  <p>Address: 123 Charity Lane, City, State 123458898</p>
          </div>
				  <div className="contact-form-div">
					  <form onSubmit={(e) => e.preventDefault()} className="contact-form">
						  <input type="text" placeholder="Name" required  className="contact-text"/>
						  <input type="email" placeholder="Email" required className="contact-email"/>
						  <textarea placeholder="Message" required className="contact-message"></textarea>
						  <button type="submit" className="contact-submit">Send Message</button>
					  </form>
		  </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
