import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" text-white  px-6 py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center text-green-400 mb-12"
      >
        Contact Me
      </motion.h1>

      {/* Contact Info */}
     <div className="max-w-3xl mx-auto bg-neutral-900 border border-green-700 rounded-2xl shadow-md p-8 text-center">
  <p className="text-lg text-gray-300 mb-4">
    Feel free to reach out to me directly!
  </p>

  <div className="text-md space-y-2 text-green-300 font-semibold break-words">
    <p>📞 Mobile: +91 9335850233</p>
    <p className="text-sm break-words">📧 Email: ashutoshtab9335850233@gmail.com</p>
  </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition"
        >
          {showForm ? "Close Form" : "Send a Message"}
        </button>
      </div>

      {/* Feedback Form */}
      {showForm && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mt-10 bg-neutral-900 border border-green-700 p-8 rounded-2xl shadow-lg"
        >
          <form
            action="https://formsubmit.co/ashutoshtab9335850233@gmail.com" // replace with your email
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-neutral-800 border border-green-500 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-neutral-800 border border-green-500 text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-neutral-800 border border-green-500 text-white focus:outline-none"
            ></textarea>

            {/* Anti-spam hidden input */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition"
            >
              Send Feedback
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default ContactPage;
