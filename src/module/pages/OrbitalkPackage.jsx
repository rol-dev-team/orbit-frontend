import PricingSeperator from '../components/internet_package/PricingSeperator'
import GetApp from '../components/section/OrbiatlkOffer/GetApp'
import WeAreOnline from '../components/section/WeAreOnline'
import PaymentGateway from '../components/section/PaymentGateway'
import BestEverPlan from '../components/section/OrbitalkPackage/BestEverPlan'
import { SupportPackage } from '../components/section/support/SupportPackage'

const OrbitalkPackage = () => {
  return (
    <>  
        <BestEverPlan/>
        <PricingSeperator/>
        <SupportPackage bg="bg-white"/>
        <GetApp/>
        <WeAreOnline/>
        <PaymentGateway/>
    </>
  )
}

export default OrbitalkPackage