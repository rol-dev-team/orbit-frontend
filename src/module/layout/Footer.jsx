import React from "react";
import { FooterLinks } from "../components/footer/FooterLinks";
import {
  footerApps,
  footerBottom,
  footerBranding,
  footerLinks,
  footerOurCompany,
  footerOurOffers,
  footerSocialMedia,
  footerSupport,
} from "../static/data";
import { DownloadApps } from "../components/footer/DownloadApps";
import { SocialMedia } from "../components/footer/SocialMedia";
import { Branding } from "../components/footer/Branding";
import { FooterBottom } from "../components/footer/FooterBottom";

export const Footer = () => {
  return (
    <footer>
      <div className='container py-4'>
        <div className='row'>
          {/* <FooterLinks data={footerOurOffers} /> */}
          <FooterLinks data={footerOurCompany} />
          <FooterLinks data={footerLinks} />
          <FooterLinks data={footerSupport} />

          <div className='col-12 col-md-4 ms-auto'>
            <SocialMedia data={footerSocialMedia} />
            <DownloadApps data={footerApps} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-12'>
            <Branding data={footerBranding} />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "-45px" }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 0 3086 132'
          fill='none'>
          <path
            d='M0 129.5H861.5C953.222 133.413 983.033 132.864 1052.5 84.9998C1106.29 12.2289 1142.85 0.121427 1225 1.99999H1876C1950 1.99999 1996.47 15.6083 2035 64.5C2115.71 142.804 2147.5 129.5 2212.5 129.5H3085.5'
            stroke='gray'
            stroke-width='1'
          />
        </svg>
      </div>
      <div className='container-fluid'>
        <FooterBottom data={footerBottom} />
      </div>
    </footer>
  );
};
