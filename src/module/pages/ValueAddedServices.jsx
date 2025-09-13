import React from "react";
import { ValueAddedHero } from "../components/section/ValueAddedHero";
import { ValueAddedService } from "../components/section/ValueAddedService";
import service1 from "../../assets/images/sections/value-added-services/service-1.png";
import service2 from "../../assets/images/sections/value-added-services/service-2.png";
import service3 from "../../assets/images/sections/value-added-services/service-3.png";
import neeramoyLogo from "../../assets/neeramoy-black.jpg";
import bongoLogo from "../../assets/bongo-black.png";
import chorkiLogo from "../../assets/chorki-logo.png";
import WeAreOnline from "../components/section/WeAreOnline";
import WhatsNewOrbit from "../components/section/WhatsNewOrbit";
import CheckOrbitInternet from "../components/section/CheckOrbitInternet";
import { ValueAddedUncomingService } from "../components/section/ValueAddedUncomingService";
import FAQComponent from "../components/FAQ.component";

export const ValueAddedServices = () => {
  const faqData = [
    {
      question: "How to apply for an Orbit connection?",
      answer:
        "You can apply by visiting our website and filling out the application form.",
    },
    {
      question: "How can I track the status of my Service Request?",
      answer:
        "Login to your dashboard and go to 'Service Requests' to check the status.",
    },
    {
      question:
        "How long will it take to activate my Orbit Internet connection?",
      answer: "Usually within 24–48 hours after verification.",
    },
    {
      question:
        "What is the process of activating Chorki membership after opting for Orbit Internet Plans?",
      answer:
        "Once your connection is active, you will receive an activation link via email or SMS.",
    },
    {
      question: "How do I transfer my connection from one location to another?",
      answer:
        "Submit a relocation request from your account dashboard. Our support will assist you.",
    },
  ];

  return (
    <>
      <ValueAddedHero />

      <ValueAddedService
        image={service1}
        logo={neeramoyLogo}
        textAlign='start'
        title1='Free '
        title2='Healthcare'
        title3='Support'
        subtile='Orbit Internet offers free telemedicine services on specific packages.'
        buttonTex='Learn More'
      />

      <ValueAddedService
        image={service2}
        logo={bongoLogo}
        logoAlign='ms-auto d-block'
        rowReverse='flex-md-row-reverse'
        textAlign='end'
        title1='Free '
        title2='Bongo'
        title3='Subscription'
        subtile='Get free Bongo Subscription on specified packages for unlimited OTT ecstacy.'
        buttonAlign='float-end'
        buttonTex='See Eligible Packages'
      />

      <ValueAddedService
        image={service3}
        logo={chorkiLogo}
        textAlign='start'
        title1='Free Chorki'
        title2=''
        title3='Subscription'
        subtile='Get free Chorki Subscription on specified packages for unlimited OTT ecstasy.'
        buttonTex='See Eligible Packages'
      />

      <ValueAddedUncomingService />
      <FAQComponent title='FAQ' faqList={faqData} />
      {/* <CheckOrbitInternet /> */}
      <WeAreOnline />
    </>
  );
};
