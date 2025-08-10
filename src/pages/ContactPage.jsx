import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaYoutube, FaDribbble, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Implement your backend or email service)");
  };

  return (
    <section className="min-h-screen px-6 py-16 mx-auto flex flex-col md:flex-row gap-16 bg-white text-gray-900">
      
      {/* Left info */}
      <div className="md:w-1/2 flex flex-col justify-center gap-8">
        <h2 className="text-4xl font-extrabold">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="font-semibold text-lg">Don't be Shy !</p>
        <p className="max-w-md">
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <p className="font-semibold">Mail me</p>
              <a href="mailto:steve@mail.com" className="hover:text-blue-600 transition">steve@mail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-600 text-xl" />
            <div>
              <p className="font-semibold">Call me</p>
              <a href="tel:+21621184010" className="hover:text-blue-600 transition">+216 21 184 010</a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a href="#" className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition text-gray-700 hover:text-white"><FaFacebookF /></a>
          <a href="#" className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition text-gray-700 hover:text-white"><FaTwitter /></a>
          <a href="#" className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition text-gray-700 hover:text-white"><FaYoutube /></a>
          <a href="#" className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition text-gray-700 hover:text-white"><FaDribbble /></a>
        </div>
      </div>

      {/* Right form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col gap-6"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-gray-100 rounded-md px-4 py-3 w-1/3 placeholder-gray-500 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-900"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-gray-100 rounded-md px-4 py-3 w-1/3 placeholder-gray-500 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-900"
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Your Subject"
            required
            className="bg-gray-100 rounded-md px-4 py-3 w-1/3 placeholder-gray-500 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600 text-gray-900"
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          required
          className="bg-gray-100 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600 resize-none text-gray-900"
        />

        <button
          type="submit"
          className="flex items-center gap-3 self-start bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition"
        >
          Send Message <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
