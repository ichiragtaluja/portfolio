import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = ({ id }) => {
  const email = "ichiragtaluja@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id={id} className="mt-8 text-center bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me!</h2>
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 transition duration-300 text-3xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 transition duration-300 text-3xl"
        >
          <FaGithub />
        </a>
        <button
          onClick={handleEmailClick}
          className="text-gray-700 hover:text-blue-500 transition duration-300 text-3xl"
        >
          <FaEnvelope />
        </button>
      </div>
      <p className="text-gray-700 mt-2 text-lg">
        You can also reach me at:{" "}
        <a href={`mailto:${email}`} className="text-blue-500">
          {email}
        </a>
      </p>
    </section>
  );
};

export default Contact;
