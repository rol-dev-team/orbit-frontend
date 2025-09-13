import React from "react";
import FAQComponent from "../components/FAQ.component";
import WeAreOnline from "../components/section/WeAreOnline";

const FAQ = () => {
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
      answer:
        "Please check our services or visit official Facebook page: [https://www.facebook.com/orbitbd.net/?locale=bn_IN]",
    },
    {
      question: "What is the payment procedure?",
      answer: `1. bKash – PAY BILL / NAGAD – BILL PAY [Write your ID properly]
      \n2. bKash Merchant number for MAKE PAYMENT: 01988886328 (Ref: Write your ID properly)
      \n3. Online through ORBIT SELFCARE by any VISA / MASTERCARD or SSL gateway.\n4. For ORBIT SELFCARE ID & PASS: Please call 16590.`,
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
      <FAQComponent title='FAQ on Orbit Internet' faqList={faqData} />
      {/* <FAQComponent title='FAQ on OrbiTalk' faqList={faqData} />
      <FAQComponent title='FAQ on Bill Pay' faqList={faqData} /> */}
      <WeAreOnline />
    </>
  );
};

export default FAQ;
