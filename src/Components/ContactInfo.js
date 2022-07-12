import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";

export default function ContactInfo() {
  return (
    <div className="ContactInfo">
      <div className="container">
        <SectionTitle heading="Contact" subheading="get in touch" />
        <div className="contactInfo-wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone size={"2.5rem"} />}
              text="+233549853041"
            />
            <ContactInfoItem
              icon={<MdEmail size={"2.5rem"} />}
              text="sanialhassan853@gmail.com"
            />
            <ContactInfoItem text="Zongo, Koforidua, Ghana" />
          </div>
          <div className="middle"></div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
