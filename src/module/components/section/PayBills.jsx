import React from 'react'
import { HeadingTitle } from '../common/HeadingTitle'
import { Link } from "react-router-dom";
import paybillsLogo from "../../../assets/images/sections/pay_bill/pay_bill_logo.png";
import payBillGo from "../../../assets/images/sections/pay_bill/paybil.png";
function PayBills() {
  return (
    <section className='pay-bills-section'>
        <div className='container'>
          <div
            className='row'
            style={{
              backgroundImage: `url(${payBillGo})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "var(--border-radius-large)",
            }}>
            <div className='col-12 col-md-6 offset-md-6'>
              <HeadingTitle
                text='Pay bills'
                style={{
                  color: "white",
                  textAlign: "start",
                  marginBottom: "0px",
                  marginTop: "1em",
                }}
              />
              <HeadingTitle
                text='Hasslefree'
                style={{
                  color: "white",
                  textAlign: "start",
                  marginBottom: "0px",
                }}
              />
              <HeadingTitle
                text='With Mobile Wallet'
                style={{
                  color: "white",
                  textAlign: "start",
                  marginBottom: "0.5em",
                }}
              />
              <div className='paybills-buttons'>
                <ul style={{ display: "flex" }}>
                  <li key='1' className='transparent-btn'>
                    <Link to='#' style={{ color: "white" }}>
                      Pay Bill
                    </Link>
                  </li>
                  <li style={{ padding: "10px" }}></li>
                  <li key='2' className='transparent-btn'>
                    <Link to='#' style={{ color: "white" }}>
                      Payment History
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='logos'>
                <img
                  src={paybillsLogo}
                  style={{
                    width: "30%",
                    marginTop: "3em",
                    paddingBottom: "2.5em",
                  }}
                  alt='logo'
                  height='auto'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default PayBills