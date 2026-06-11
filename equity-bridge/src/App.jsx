import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e9f7ef] text-gray-800">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-700">
          EquitBridge
        </h1>

        <ul className="flex gap-6 font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Initiatives</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
          <li className="hover:text-green-700 font-semibold cursor-pointer">
            Donate
          </li>
        </ul>
      </nav>

      {/* HERO / CAROUSEL SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

        {/* Background video carousel (replace src later) */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source src="/assets/ngo-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="relative text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-green-800">
            Building Strong Communities
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Empowering youth, women, and communities through sustainable initiatives in education, health, and environment.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
            Join Us
          </button>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-10 py-16 bg-white">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/founder.jpg"
            alt="Founder"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Welcome Message from Founder
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Welcome to EquitBridge Initiative. Our mission is to empower communities
            through education, youth development, women empowerment, and sustainable
            environmental programs. Together, we can build a better future where
            everyone has equal opportunities to thrive.
          </p>

          <p className="mt-4 font-semibold text-gray-800">
            — Founder & Executive Director
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 text-white text-center py-6">
        <p>© 2026 EquitBridge Initiative. All rights reserved.</p>
      </footer>
    </div>
  );
}