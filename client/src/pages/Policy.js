import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h6>Privacy Policy</h6>
          <p>At Shoppers Khazana, we value your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard the data you provide while using our website.This may include personal details like your name, address, email, and payment information. We may also gather data through cookies or similar technologies to enhance your browsing experience.</p>
          <h6>Cookies</h6>
          <p>We use cookies to enhance your browsing experience. You can control cookies through your browser settings, but disabling them may affect certain functionalities of the website.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;