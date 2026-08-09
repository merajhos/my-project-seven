import { useState } from "react";
import toast from "react-hot-toast";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have a project idea, job opportunity, or just want to say hello?
            Feel free to contact me.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Get in Touch
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              I'm currently open to frontend development opportunities,
              freelance projects, and collaboration. You can reach me
              through any of the following channels.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-lg bg-blue-50 p-3">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">
                    your@email.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-lg bg-blue-50 p-3">
                  <PhoneIcon className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">
                    +880 1XXXXXXXXX
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                <div className="rounded-lg bg-blue-50 p-3">
                  <MapPinIcon className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-xl">
                  💬
                </div>

                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium text-gray-900">
                    Chat on WhatsApp
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 font-semibold text-gray-900">
                Find me on
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-900 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-600 hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-600 hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;