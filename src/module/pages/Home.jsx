import { Slider } from "../components/slider/Slider";

import { SwitchToOrbitInstantly } from "../features/SwitchToOrbitInstantly";

import PayBills from "../components/section/PayBills";
import ConnectingBangladesh from "../components/section/ConnectingBangladesh";
import DigitalOfferCheck from "../components/section/DigitalOfferCheck";
import PackageSection from "../components/section/PackageSection";
import ConnectionSpeed from "../components/section/ConnectionSpeed";
import WhatsNewOrbit from "../components/section/WhatsNewOrbit";
import BecomePartner from "../components/section/BecomePartner";
import WhatsInTheirMind from "../components/section/WhatsInTheirMind";
import CheckOrbitInternet from "../components/section/CheckOrbitInternet";
import GoDigitalOrbit from "../components/section/GoDigitalOrbit";
import WeAreOnline from "../components/section/WeAreOnline";
import PaymentGateway from "../components/section/PaymentGateway";
import NewUserRegistration from "../components/section/NewUserRegistration.component";
import ConnectionRealtimeSpeed from "../components/section/ConnectionRealtimeSpeed";
import OfferFaq from "../components/section/offer/OfferFaq";
import FAQComponent from "../components/FAQ.component";

export const Home = () => {
  const faqData = [
    {
      question: "Which area has ORBIT coverage?",
      answer: `Bagerhat, Bandarban, Barguna, Barisal, Bhola, Bogura, Brahmanbaria, Chapainawabganj, Chandpur, Chattogram, Chuadanga, Comilla, Cox's Bazar, Dhaka, Dinajpur, Faridpur, Feni, Gaibandha, Gazipur, Gopalganj, Habiganj, Jamalpur, Jashore, Jhalakathi, Jhenaidah, Joypurhat, Khagrachhari, Khulna, Kishoreganj, Kurigram, Kushtia, Lakshmipur, Lalmonirhat, Madaripur, Magura, Manikganj, Meherpur, Moulvibazar, Munshiganj, Mymensingh, Naogaon, Narail, Narayanganj, Narsingdi, Natore, Netrokona, Nilphamari, Noakhali, Pabna, Panchagarh, Patuakhali, Pirojpur, Rajbari, Rajshahi, Rangamati, Rangpur, Satkhira, Sherpur, Shariatpur, Sirajganj, Sunamganj, Sylhet, Tangail, Thakurgaon. For more details, please call 16590.`,
    },
    {
      question: "Do you have cost?",
      answer:
        "Availability depends on your area and address. For more details, please call 16590.",
    },
    {
      question: "Want to know about package details.",
      answer: "Please visit our website or official Facebook page: [URL]",
    },
    {
      question: "What is the payment procedure?",
      answer: `1. bKash – PAY BILL / NAGAD – BILL PAY [Write your ID properly]\n2. bKash Merchant number for MAKE PAYMENT: 01988886328 (Ref: Write your ID properly)\n3. Online through ORBIT SELFCARE by any VISA / MASTERCARD or SSL gateway.\n4. For ORBIT SELFCARE ID & PASS: Please call 16590.`,
    },
    {
      question: "How will I contact with ORBIT?",
      answer: `Helpline (24/7): 16590 / 09643000222\nEmail: care@orbitbd.net\nFacebook: [URL]`,
    },
    {
      question: "How will I get value added service?",
      answer: `We have multiple packages to get free & monthly value-added services with internet bundles.\nOur value-added services are:\n- BongoBD premium subscription\n- Chorki subscription\n- Free talktime\n- Telemedic\n- Real IP (On demand)\n\nPlease call 16590 to get the offer.`,
    },
    {
      question: "What is your CACHE service limit?",
      answer: "We provide 100+ cache service segmentally.",
    },
    {
      question:
        "What is the solution while getting No internet / Service Slow / gaming issue?",
      answer: `Please check the following primary steps:\n\n- Check the power connectivity of ROUTER & ONU. It must be functional.\n- Ensure good WiFi signal range. Test by pinging router gateway (latency < 5-10ms).\n- Ensure your device (Mobile / Laptop / TV) is in good condition (CPU/RAM loads).\n\nTry rebooting all devices & ONU-ROUTER. This may solve issues due to interference, load, overheating, or ROM data.\n\nFor further assistance, call 16590.`,
    },
    {
      question: "Do you sell the router?",
      answer:
        "Not yet. Please call 16590 for suggestions about the best router for your location.",
    },
    {
      question: "I have more queries about your product / service.",
      answer:
        "Please call 16590 for further queries or email us at care@orbitbd.net",
    },
  ];

  return (
    <>
      <section className='slider-banner-section'>
        <Slider />
      </section>
      <PackageSection />
      <CheckOrbitInternet />
      <NewUserRegistration />
      <ConnectionRealtimeSpeed />
      <WhatsInTheirMind
        title="What's Behind Their Smiles?"
        subtitle='on Orbit Internet'
      />
      <WhatsNewOrbit />
      {/* <SwitchToOrbitInstantly /> */}
      {/* <PayBills /> */}
      {/* <ConnectingBangladesh /> */}
      {/* <DigitalOfferCheck /> */}
      {/* <ConnectionSpeed /> */}
      {/* <BecomePartner /> */}
      {/* <GoDigitalOrbit /> */}

      {/* <OfferFaq /> */}
      <FAQComponent title='FAQ' faqList={faqData} />
      <WeAreOnline />
      <PaymentGateway />
    </>
  );
};
