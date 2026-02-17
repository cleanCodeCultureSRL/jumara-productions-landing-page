"use client";

import { useState } from "react";
// import contact from "/contact.jpg";
import Image from "next/image";

export default function Contact({ isHomePage }) {
  console.log(isHomePage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [snackbar, setSnackbar] = useState(null);

  const closeSnackbar = () => setSnackbar(null);

  const handleSubmit = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, phoneNumber, company }),
    });

    if (response.ok) {
      setSnackbar({ message: "Message sent successfully!", type: "success" });
      setName("");
      setPhoneNumber("");
      setCompany("");
      setEmail("");
      setMessage("");
    } else {
      setSnackbar({ message: "Failed to send message." });
    }
  };

  const textColor = isHomePage ? "text-[#061425]" : "text-white";
  const backgroundColor = isHomePage ? "bg-white" : "transparent";
  return (
    <>
      <section
        id="contact"
        className={`${textColor} ${backgroundColor} py-16 relative overflow-hidden px-6`}
      >
        {!isHomePage && (
          <Image
            src={"/contact.jpg"}
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-20"
            fill
          />
        )}
        <div className="container mx-auto px-2 z-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
                Contactează-ne
              </h2>
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  TELEFON
                </h3>
                <p className={textColor}>+40 770 202 977</p>
              </div>
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  EMAIL
                </h3>
                <p className={textColor}>contact@jumaraproductions.ro</p>
              </div>
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  ADRESA
                </h3>
                <p className={textColor}>
                  România,
                  <br />
                  București,
                  <br />
                  Sector 4
                </p>
              </div>
            </div>
            <div className="w-px bg-gray-300 mx-4"></div>
            <div className="w-full lg:w-[calc(66.666667%-1rem)] px-4">
              <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
                Hai să vorbim
              </h2>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <label
                      htmlFor="name"
                      className={`block ${textColor} font-semibold mb-2`}
                    >
                      1. NUME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]"
                      placeholder="Nume întreg..."
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label
                      htmlFor="email"
                      className={`block ${textColor} font-semibold mb-2`}
                    >
                      2. ADRESĂ DE EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]"
                      placeholder="Email..."
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <label
                      htmlFor="company"
                      className={`block ${textColor} font-semibold mb-2`}
                    >
                      3. DENUMIRE COMPANIE
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]"
                      placeholder="Companie..."
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label
                      htmlFor="enquiry"
                      className={`block ${textColor} font-semibold mb-2`}
                    >
                      4. NUMĂR DE TELEFON
                    </label>
                    <input
                      type="text"
                      id="enquiry"
                      name="enquiry"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e05e3d]"
                      placeholder="+40 770 202 977"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className={`block ${textColor} font-semibold mb-2`}
                  >
                    CUM TE PUTEM AJUTA?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-3 py-3 text-[#061425] bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#e05e3d]"
                    placeholder="Producție video pentru companie software..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#e05e3d] text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300"
                >
                  Trimite mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/6 bg-[#e05e3d] rounded-tl-full opacity-20"></div>
      </section>

      {snackbar && (
        <div className="fixed bottom-4 right-4 bg-[#e05e3d] text-white px-4 py-2 rounded-md">
          {snackbar.message}
          <button onClick={closeSnackbar} className="ml-2 font-bold">
            ×
          </button>
        </div>
      )}
    </>
  );
}
