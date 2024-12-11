import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState(''); // State for email input

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update the email state
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
    // Add logic to handle form submission
  };

  return (
    <section className="section-box mt-50 mb-60">
      <div className="container">
        <div className="box-newsletter">
          <h5 className="text-md-newsletter">Sign up to get</h5>
          <h6 className="text-lg-newsletter">the latest jobs</h6>
          <div className="box-form-newsletter mt-30">
            <form className="form-newsletter" onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="input-newsletter"
                value={email}
                placeholder="Enter your email"
                onChange={handleEmailChange} // Attach the onChange handler
              />
              <button
                type="submit"
                className="btn btn-default font-heading icon-send-letter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="box-newsletter-bottom">
          <div className="newsletter-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
