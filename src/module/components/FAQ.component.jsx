import React from "react";

const FAQComponent = ({ title, faqList = [] }) => {
  return (
    <section className='faq-section'>
      <h2 className='faq-title text-center mb-4'>{title}</h2>
      <div className='container'>
        <div className='accordion accordion-flush' id='accordionFlushExample'>
          {faqList.map((faq, index) => (
            <div className='accordion-item' key={index}>
              <h2 className='accordion-header' id={`flush-heading${index}`}>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded='false'
                  aria-controls={`flush-collapse${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className='accordion-collapse collapse'
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent='#accordionFlushExample'>
                <div className='accordion-body fw-bold'>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
