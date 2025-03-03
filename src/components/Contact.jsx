
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email Sent Successfully:", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.error("Email Send Error:", error.text);
          alert("Failed to send message. Try again.");
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-200 dark:bg-[#212121]">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-emerald-500 mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl font-bold dark:text-white">Let's Work Together</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 dark:bg-[#212121] shadow-2xl bg-cyan-200 shadow-lg shadow-cyan-100/30 p-9 rounded-lg col-span-1"
          >
            <div className="relative w-full h-80 mb-6 mx-auto">
              <img
                src="https://img.freepik.com/free-photo/handsome-businessman_1098-136.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm currently available for freelance work and full-time positions.
              Let's build something amazing together!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-emerald-500 w-5 h-5" />
                <span className="text-gray-600 dark:text-gray-300">abdulmakdoom90@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Abdulmakdoom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-500 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-makdoom-253893237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-500 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-gray-100 dark:bg-[#212121] shadow-2xl bg-cyan-200 shadow-lg shadow-cyan-100/30 p-6 rounded-lg col-span-2"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 dark:bg-[#313131] dark:text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 dark:bg-[#313131] dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 dark:bg-[#313131] dark:text-white"
                placeholder="Enter subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 dark:bg-[#313131] dark:text-white"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

