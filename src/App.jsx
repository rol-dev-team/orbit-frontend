import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import "./responsive.css";
import { NotFound } from "./module/pages/NotFound";
import { PublicRoutes } from "./module/routes/PublicRoutes";
import { Home } from "./module/pages/Home";
import { HomeInternet } from "./module/pages/HomeInternet";
import { Orbitalk } from "./module/pages/Orbitalk";
import { BTRCApprovedTarff } from "./module/pages/BTRCApprovedTarff";
import { Apps } from "./module/pages/Apps";
import Offers from "./module/pages/Offers";
import { OrbitalkOffer } from "./module/pages/OrbitalkOffer";
import { ValueAddedServices } from "./module/pages/ValueAddedServices";
import OrbitalkPackage from "./module/pages/OrbitalkPackage";
import Gallery from "./module/pages/Gallery";
import CallUp from "./module/pages/CallUp";
import * as bootstrap from "bootstrap";
import FAQ from "./module/pages/FAQ.page";
import ViewAllPackages from "./module/pages/ViewAllPackages";
import { SubscriptionRequest } from "./module/pages/SubscriptionRequest";
import About from "./module/pages/About";
window.bootstrap = bootstrap;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='home-internet' element={<HomeInternet />} />
          <Route path='orbitalk' element={<Orbitalk />} />
          <Route path='offers' element={<Offers />} />
          <Route path='orbitalk/offers' element={<OrbitalkOffer />} />
          <Route path='/support/call-up' element={<CallUp />} />

          <Route path='/app/download' element={<Apps />} />
          <Route path='value-added-service' element={<ValueAddedServices />} />

          <Route path='btrc-approved-tariff' element={<BTRCApprovedTarff />} />
          <Route
            path='/orbitalk/btrc-approved-tariff'
            element={<BTRCApprovedTarff />}
          />
          <Route path='/news-gallery/gallery' element={<Gallery />} />
          <Route path='orbitalk/packages' element={<OrbitalkPackage />} />
          <Route path='view-all-packages' element={<ViewAllPackages />} />
          <Route path='get-new-connection' element={<SubscriptionRequest />} />
          <Route path='about-us' element={<About />} />

          <Route path='faq' element={<FAQ />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
