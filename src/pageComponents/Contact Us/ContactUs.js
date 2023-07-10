import React from 'react'

const ContactUs = () => {
  return (
    <div>
       <section className="contact-three">

            <div className="contact-three-shape"

                style={{backgroundImage: "url(assets/images/shapes/contact-three-shape.png)"}}></div>

            <div className="container">

                <div className="section-title text-center">

                    <span className="section-title__tagline">New Membership</span>

                    <h2 className="section-title__title">Please Share Your Details</h2>

                </div>

                <div className="contact-page__form-box">

                    <form action="assets/inc/sendemail.php" className="contact-page__form contact-form-validated"

                        novalidate="novalidate">

                        <div className="row">

                            <div className="col-xl-6">

                                <div className="contact-form__input-box">

                                    <input type="text" placeholder="Your name" name="name" />

                                </div>

                            </div>

                            <div className="col-xl-6">

                                <div className="contact-form__input-box">

                                    <input type="email" placeholder="Email address" name="email" />

                                </div>

                            </div>

                            <div className="col-xl-6">

                                <div className="contact-form__input-box">

                                    <input type="text" placeholder="Phone" name="phone" />

                                </div>

                            </div>

                            <div className="col-xl-6">

                                <div className="contact-form__input-box">

                                    <input type="text" placeholder="Referred By" name="subject" />

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xl-12">

                                <div className="contact-form__input-box text-message-box">

                                    <textarea name="message" placeholder="Write a message"></textarea>

                                </div>

                                <div className="contact-form__btn-box">

                                    <button type="submit" className="thm-btn contact-form__btn">Send a message</button>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </section>


    </div>
  )
}

export default ContactUs
 