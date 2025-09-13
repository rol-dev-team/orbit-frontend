import React, { useRef } from "react";
import { usePDF } from "react-to-pdf";
import { HeadingTitle } from "../components/common/HeadingTitle";
import btrcPDF from "../../assets/btrc-approval/btrc.pdf";
import { Button } from "../components/common/Button";
import WeAreOnline from "./../components/section/WeAreOnline";
import { SubTitle } from "./../components/common/SubTitle";
import PaymentGateway from "../components/section/PaymentGateway";

export const BTRCApprovedTarff = () => {
  const { toPDF } = usePDF({ filename: btrcPDF });
  return (
    <>
      <section className='btrc-approved-tariff-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <HeadingTitle
                text='Approval of'
                style={{
                  marginBottom: "10px",
                  fontSize: "35px",
                  marginTop: "20px",
                }}
              />

              <SubTitle
                text='Bangladesh Telecommunication Regulatory Commission'
                style={{
                  marginBottom: "20px",
                  color: "var(--color-primary)",
                  fontSize: "23px",
                  fontWeight: "bold",
                }}
              />
              <div className='pdf-content-box'>
                <iframe className='w-100 h-100' src={btrcPDF} />
              </div>

              <a href={btrcPDF} download='btrc-approval.pdf'>
                <Button
                  type='button'
                  text='Download'
                  background='var(--color-primary)'
                  color='white'
                  padding='5px 45px'
                  borderRadius='5px'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <WeAreOnline />
      <PaymentGateway />
    </>
  );
};
