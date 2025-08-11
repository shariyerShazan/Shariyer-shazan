import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import {
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formWithTime = {
      ...form,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.EMAIL_SERVICE_ID,
        import.meta.env.EMAIL_TEMPLATE_ID,
        formWithTime,
        import.meta.env.EMAIL_USER_ID
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen px-8 py-20 text-text max-w-7xl mx-auto flex flex-col md:flex-row gap-20  relative overflow-hidden text-gray-900">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="absolute top-12 left-8 text-center text-[8rem] font-extrabold text-primary opacity-10 dark:opacity-30 select-none pointer-events-none hidden md:block">
        CONTACT
      </h1>

      {/* Left Info */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 z-10">
        <h2 className="text-5xl font-extrabold tracking-tight text-primary">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="font-semibold text-xl text-text">Don't be shy!</p>
        <p className="max-w-md text-text leading-relaxed">
          Feel free to reach out for new projects, creative ideas, or
          opportunities to collaborate.
        </p>

        <div className="flex flex-col gap-6 max-w-md ">
          <div className="flex items-center gap-5">
            <FaEnvelope size={30} className="text-primary" />
            <div>
              <p className="font-semibold text-text">Mail me</p>
              <a
                href="mailto:shariyershazan1@gmail.com"
                className="hover:text-primary transition duration-300"
              >
                shariyershazan1@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FaPhone size={30} className="text-primary" />
            <div>
              <p className="font-semibold text-text">Call me</p>
              <a
                href="tel:+8801724630245"
                className="hover:text-primary transition duration-300"
              >
                +8801724-630245
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form + Social */}
      <div className="md:w-1/2 flex flex-col gap-8 z-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-gray-100 rounded-lg px-5 py-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-gray-100 rounded-lg px-5 py-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Your Subject"
              required
              className="bg-gray-100 rounded-lg px-5 py-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            required
            className="bg-gray-100 rounded-lg px-5 py-4 placeholder-gray-400 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <button
            type="submit"
            className="my-4 cursor-pointer group relative flex items-center px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white"
          >
            <span className="ml-8">Send message</span>
            <span className="absolute -left-[4px] flex items-center justify-center w-11 h-full rounded-full bg-primary text-white z-10">
              <FiSend size={20}/>
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"></span>
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-1 sm:gap-4 mt-6">
          <a
            className="cursor-pointer"
            href="mailto:shariyershazan1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Email"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/shariyerShazan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.facebook.com/darling.shazan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
              alt="Facebook"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://x.com/SJan_1293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/X%20(Twitter)-000000?style=for-the-badge&logo=x&logoColor=white"
              alt="X (Twitter)"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
