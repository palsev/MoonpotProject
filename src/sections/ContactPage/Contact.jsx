import ContactForm from "./ContactForm/ContactForm"
import ContactStyleWrapper from "./Contact.style"

import locationIcon from "assets/images/kycimg/location.svg"
import mailIcon from "assets/images/kycimg/sms-notification.svg" 

const Contact = () => {
    return (
        <ContactStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
                        <div className="contact_info">
                            <h3 className="contact_info_title">Contact Info</h3>
                            <div className="contact_info_item">
                                <div className="info_item_icon">
                                    <img src={locationIcon} alt="icon" className="img-fluid" />
                                </div>
                                <div className="info_item_content">
                                    <h6>MOPOTS HQ</h6>
                                    <p>Mopots Inc, 06 Highley St, Victoria, Germany</p>
                                    <a href="# ">Google Direction</a>
                                </div>
                            </div>
                            <div className="contact_info_item">
                                <div className="info_item_icon">
                                    <img src={locationIcon} alt="icon" className="img-fluid" />
                                </div>
                                <div className="info_item_content">
                                    <h6>Call Us</h6>
                                    <p>Mobile: (+xx) - xxxx - xxxx</p>
                                    <p>Hotline: xxxx - xxxx</p>
                                </div>
                            </div>
                            <div className="contact_info_item">
                                <div className="info_item_icon">
                                    <img src={mailIcon} alt="icon" className="img-fluid" />
                                </div>
                                <div className="info_item_content">
                                    <h6>MAIL US</h6>
                                    <p>Info: admin@mopots.io</p>
                                    <p>Support: admin@mopots.io</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContactStyleWrapper>
    )
}

export default Contact;