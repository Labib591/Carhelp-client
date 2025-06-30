import React from "react";
import { FaCar, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const AboutUs = () => {
  return (
    
    <div className="min-h-screen py-24 px-6 md:px-20 bg-[var(--primary-50)] text-[var(--primary-950)]">
      <title>Carhelp | About</title>
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-[var(--primary-700)]">
          About Carhelp
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto text-[var(--primary-900)]">
          At <span className="font-semibold text-[var(--primary-color)]">Carhelp</span>, we're
          dedicated to making car rentals easy, affordable, and accessible. Whether you're planning
          a weekend getaway, a business trip, or just need a ride for a few hours — Carhelp has you
          covered.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--primary-100)]">
            <FaCar className="text-4xl text-[var(--primary-600)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-800)] mb-2">Diverse Fleet</h2>
            <p className="text-[var(--primary-900)]">
              Choose from economy, luxury, SUVs, and more — all well-maintained and ready to drive.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--primary-100)]">
            <FaHandshake className="text-4xl text-[var(--primary-600)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-800)] mb-2">Trusted Platform</h2>
            <p className="text-[var(--primary-900)]">
              We prioritize safety and transparency. Our platform is built on trust and reliability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--primary-100)]">
            <FaMapMarkedAlt className="text-4xl text-[var(--primary-600)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-800)] mb-2">Wide Coverage</h2>
            <p className="text-[var(--primary-900)]">
              Rent from cities all across the country. Carhelp is available wherever you need a car.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--primary-100)]">
            <MdSupportAgent className="text-4xl text-[var(--primary-600)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-800)] mb-2">24/7 Support</h2>
            <p className="text-[var(--primary-900)]">
              Our dedicated team is here to assist you any time — day or night.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--primary-100)]">
            <FaCar className="text-4xl text-[var(--primary-600)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-800)] mb-2">Flexible Booking</h2>
            <p className="text-[var(--primary-900)]">
              Rent a car on your terms — hourly, daily, or weekly. No hidden fees.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-[var(--primary-700)]">
            Join thousands who trust <span className="text-[var(--primary-color)]">Carhelp</span>
          </h3>
          <p className="mt-2 text-[var(--primary-900)]">
            Drive your journey with confidence — powered by Carhelp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
