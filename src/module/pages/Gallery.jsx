import OfferFaq from "../components/section/offer/OfferFaq";
import PaymentGateway from "../components/section/PaymentGateway";
import WeAreOnline from "../components/section/WeAreOnline";
import WhatsInTheirMind from "../components/section/WhatsInTheirMind";
import WhatsNewOrbit from "../components/section/WhatsNewOrbit";
import GalleryHero from "./../components/section/Gallery/GalleryHero";

const Gallery = () => {
  return (
    <>
      {/* <GalleryHero /> */}
      <WhatsInTheirMind
        title='Stories behind the Smile'
        subtitle='on Orbit Internet'
      />
      <WhatsNewOrbit />
      <WeAreOnline />
      <PaymentGateway />
    </>
  );
};

export default Gallery;
