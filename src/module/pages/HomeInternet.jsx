
import HeroSection from "../components/internet_package/HeroSection";
import PricingSeperator from "../components/internet_package/PricingSeperator";
import CheckOrbitInternet from "../components/section/CheckOrbitInternet";
import DigitalOfferCheck from "../components/section/DigitalOfferCheck";
import PackageSection from "../components/section/PackageSection";
import PaymentGateway from "../components/section/PaymentGateway";
import WeAreOnline from "../components/section/WeAreOnline";
export const HomeInternet = () => {
  return (
    <>
      <HeroSection/>
      <PricingSeperator/>
      <PackageSection bg="bg-white"/>
      <DigitalOfferCheck/>
      <CheckOrbitInternet/>
      <WeAreOnline/>
      <PaymentGateway/>
    </>
  )
};
