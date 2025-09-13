
import GetApp from '../components/section/OrbiatlkOffer/GetApp'
import { OrbitalkHero } from '../components/section/OrbiatlkOffer/OrbitalkOfferHero'
import PaymentGateway from '../components/section/PaymentGateway'
import WeAreOnline from '../components/section/WeAreOnline'
import WhatsNewOrbit from '../components/section/WhatsNewOrbit'
import OfferFaq from '../components/section/offer/OfferFaq'
export const OrbitalkOffer = () => {
  return (
   <>

     <OrbitalkHero/>
     <WhatsNewOrbit/>
     <GetApp/>
     <OfferFaq/>
     <br></br>
     <WeAreOnline/>
     <PaymentGateway/>

   </>
  )
}
