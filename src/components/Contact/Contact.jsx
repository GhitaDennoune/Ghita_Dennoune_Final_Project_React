

         import React from "react";
import Footer from "../Footer/Footer";
import { Image } from "../../constant/images";

function Contact() {
  return (
    <>
      <div className="flex flex-col">

        <div className="relative w-full">
          <img
            src={Image.About}
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-[50px] font-bold">
            Contact
          </h1>
        </div>

        <section className=" py-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-5">

            <div className="md:w-1/2 h-[520px] relative">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6362761737046!2d-7.53642662450357!3d33.60378817332928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sfr!2sma!4v1770833019259!5m2!1sfr!2sma"
                className="w-full h-full rounded"
              />
            </div>

            <div className="md:w-1/2 p-10 rounded ">
              <h2 className="text-2xl font-extralight mb-6 text-gray-800">
                Send us your message
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-3 rounded "
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 rounded "
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-gray-300 p-3 rounded "
                />

                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded resize-none "
                ></textarea>

                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#e65540]">
                  SEND
                </button>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
