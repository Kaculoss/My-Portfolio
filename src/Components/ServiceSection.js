import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";

export default function ServiceSection() {
  return (
    <div className="serviceSection">
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />
        <div className="services-allitems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux design for websites which makes the website looks good and unique from others."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also develop websites with blazing fast speed and high performance."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Development"
            desc="I develop mobile applications with beautiful and eye catching user interfaces"
          />
        </div>
      </div>
    </div>
  );
}
