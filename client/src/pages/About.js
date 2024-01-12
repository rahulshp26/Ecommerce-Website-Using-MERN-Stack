import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%",}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Shoppers Khazana, where passion meets convenience in the world of online shopping. Founded on the belief that shopping should be an enjoyable, hassle-free experience, we've curated a haven for quality products and exceptional service.
But we're more than just an online store; we're a community. Our team consists of enthusiasts and experts who share a common dedication to bringing you the best. With a finger on the pulse of innovation, we tirelessly scout for unique, reliable items, ensuring each purchase enriches your life in meaningful ways.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;