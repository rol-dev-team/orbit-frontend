import React from "react";
import NewUserRegistration from "../components/section/NewUserRegistration.component";
import WeAreOnline from "../components/section/WeAreOnline";
import PaymentGateway from "../components/section/PaymentGateway";

export const SubscriptionRequest = () => {
  return (
    <>
      <NewUserRegistration />
      <WeAreOnline />
      <PaymentGateway />
    </>
  );
};
