import { Code, Smartphone, AppWindow } from "lucide-react";
import code from "../assets/imgs/code.png";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="container py-24 px-4 relative">
        <img
          loading="lazy"
          src={code}
          className="absolute bottom-0 right-0  h-10 md:h-14 lg:h-18"
        />

        <div className="mb-5 opacity-0 animate-fade-in">
          <h1 className="homepage-title-font">
            About <span className="tertiary-color">Me</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-justify gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl tertiary-font">
              Passionate Software Engineer
            </h3>
            <p>
              Hi, I am Jameela — a software engineer who loves building clean,
              intuitive digital experiences. I am passionate about designing
              thoughtful interfaces, and turning ideas into real products.{" "}
              <br /> <br /> With proven problem-solving abilities and a history
              of effective team collaboration I am seeking a challenging role to
              leverage expertise in creating innovative technology solutions and
              further develop my professional skills.
            </p>
            <div className="mt-12">
              <a className="primary-button" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-12 bg-tertiary-light p-6 items-center rounded-md card-hover">
              <div className="rounded-full bg-tertiary primary-color p-2 ">
                <Code />
              </div>
              <div
                className="text-xl
               secondary-font"
              >
                Web Development
              </div>
            </div>
            <div className="flex gap-12 bg-tertiary-light p-6 items-center rounded-md card-hover">
              <div className="rounded-full bg-tertiary primary-color p-2 ">
                <AppWindow />
              </div>
              <div
                className="text-xl
               secondary-font"
              >
                UI/UX Development
              </div>
            </div>
            <div className="flex gap-12 bg-tertiary-light p-6 items-center rounded-md card-hover">
              <div className="rounded-full bg-tertiary primary-color p-2 ">
                <Smartphone />
              </div>
              <div
                className="text-xl
               secondary-font"
              >
                App Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
