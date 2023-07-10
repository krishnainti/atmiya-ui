import PageHeader from "../../components/PageHeader";
import ContactUs from "./ContactUs";

import React from 'react'

const ContactUsPage = () => {
  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Contact Us", link: "/contact" },
        ]}
        title="Contact Us Page"
      />
      <ContactUs />
    </div>
  )
}
export default ContactUsPage;