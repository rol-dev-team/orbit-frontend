import React from "react";
import OfferHero from "../components/section/offer/OfferHero";
import WhatsNewOrbit from "../components/section/WhatsNewOrbit";
import GradientText from "../components/section/offer/GradientText";
import { SwitchToOrbitInstantly } from "../features/SwitchToOrbitInstantly";
import GoDigitalOrbit from "../components/section/GoDigitalOrbit";
import BecomePartner from "../components/section/BecomePartner";
import OfferFaq from "../components/section/offer/OfferFaq";
import WeAreOnline from "../components/section/WeAreOnline";
import PaymentGateway from "../components/section/PaymentGateway";

function Offers() {
  return (
    <>
      <OfferHero />
      <WhatsNewOrbit />
      {/* <GradientText/>
        <SwitchToOrbitInstantly/>
        <GoDigitalOrbit/> */}
      {/* <BecomePartner/>
        <OfferFaq/> */}
      <WeAreOnline />
      <PaymentGateway />
    </>
  );
}

export default Offers;
