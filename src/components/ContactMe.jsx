import { Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import code from "../assets/imgs/code.png";
import square from "../assets/imgs/square.png";
import { ArrowUp } from "lucide-react";
//template_jb9eciy

//service_etixnle

//VkOltFMV6wruEUYUe

export const ContactMe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_etixnle",
        "template_jb9eciy",
        {
          from_name: form.name,
          to_name: "Jameela",
          from_email: form.email,
          to_email: "jameelahafi@gmail.com",
          message: `Message from: ${form.name} <${form.email}>\n\n${form.message}`,
        },
        "VkOltFMV6wruEUYUe"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you I will get back to you soon");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Failed to send email");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen">
      <div className="container pt-24 px-6 relative">
        <div className="mb-5 opacity-0 animate-fade-in">
          <h1 className="homepage-title-font">
            Contact <span className="tertiary-color">Me</span>
          </h1>
        </div>
        <img
          src={square}
          className="absolute top-0 right-0 h-10 md:h-14 lg:h-18"
        />

        {/* 2 Column Layout — same as About section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* RIGHT = TEXT / INFO */}
          <div className="space-y-6">
            <h3 className="text-xl secondary-font uppercase">Get In Touch</h3>
            <p className="text-justify text-white/90">
              I would love to hear from you! Whether you have a question,
              project, collaboration idea, or just want to say hi — drop a
              message and I’ll get back to you soon.
            </p>

            <div className="flex justify-center gap-4 m-auto">
              <a
                href="https://github.com/chocolatecaake"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-tertiary-light"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/jameela-hafi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-tertiary-light"
              >
                <Linkedin />
              </a>
            </div>
            <img
              src={code}
              className="absolute bottom-0 left-1/4 h-10 md:h-14 lg:h-18"
            />
          </div>
          {/* LEFT = FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary-light p-4 px-6 rounded-full tertiary-color font-semibold focus:outline-none focus:ring-2 focus:ring-primary "
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email Address"
              className="bg-tertiary-light p-4 px-6 rounded-full tertiary-color font-semibold focus:outline-none focus:ring-2 focus:ring-primary "
            />
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your Message"
              className="bg-tertiary-light p-4 px-6 rounded-xl tertiary-color font-semibold focus:outline-none focus:ring-2 focus:ring-primary "
            />
            <div className="flex justify-end">
              <button className="primary-button cursor-pointer w-auto mt-4">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            <div className="animate-bounce">
              <a href="#home">
                <ArrowUp className="h-15 w-5" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
