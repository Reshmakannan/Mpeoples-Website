import React from "react";
import "../Style/Homepage.css";

import WhoWeAre from "./Whoweare";
import Howwework from "./Howwework";
import ServicesSection from "./Servicessection";
import OurProducts from "./Ourproducts";
import ImpactStories from "./ImpactStories";
import TrustedClients from "./Trustedclients";
import WhyChoose from "./Whychoose";
import ClientFeedback from "./Clientfeedback";
import OurTeam from "./Ourteam";
import OurBlogs from "./Ourblogs";
import Forms from "./Forms";
import AddressSection from "./AddSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section>
        <WhoWeAre />
      </section>

      <section>
        <Howwework />
      </section>

      {/* SERVICES */}
      <section className="services-header">
        <section className="services-body">
          <div className="services-container">
            <ServicesSection />
          </div>
        </section>
      </section>

      <section>
        <OurProducts />
      </section>

      <section>
        <ImpactStories />
      </section>

      <section>
        <TrustedClients />
      </section>

      <WhyChoose />

      <section>
        <ClientFeedback />
      </section>

      <section>
        <OurTeam />
      </section>

      <section>
        <OurBlogs />
      </section>

      <section>
        <Forms />
      </section>

      <section>
        <AddressSection />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;