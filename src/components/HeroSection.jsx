import { ArrowDown } from "lucide-react";
import homebg2 from "../assets/imgs/homebg2.png";
import code from "../assets/imgs/code.png";
import square from "../assets/imgs/square.png";

export const HeroSection = () => {
  const date = new Date();
  return (
    <section
      id="home"
      className=" relative min-h-screen flex flex-col items-center justify-center p4 bg-center bg-no-repeat"
    >
      <div
        className="absolute bg-no-repeat inset-0 bg-center bg-cover filter blur-sm"
        style={{
          backgroundImage: `url(${homebg2})`,
          backgroundSize: "auto clamp(40vh, 70vh, 90vh)",
        }}
      ></div>

      <img
        src={square}
        className="absolute bottom-0 right-0 h-10 md:h-14 lg:h-18"
      />
      <img
        src={square}
        className="absolute top-0 right-0 h-10 md:h-14 lg:h-18"
      />

      <div className="container w-full mx-auto z-10 ">
        <div className="space-y-6">
          <h1 className="md:text-6xl flex flex-col tracking-tight">
            <div className="flex items-center space-x-4">
              <span className="ms-9 text-4xl font-md opacity-0 animate-fade-in tertiary-font">
                Full Stack
              </span>
              <hr className="w-xs border" />
            </div>
            <span className="homepage-title-font  font-semibold tracking-widest mb-4 text-2xl sm:text-2xl md:text-6xl text-center whitespace-normal md:whitespace-nowrap">
              SOFTWARE ENGINEER
            </span>
            <div>
              <span className="tertiary-color animate-fade-in inflate-font me-9 gap-6 font-thin text-9xl self-end">
                Jameela Hafi
              </span>
            </div>
          </h1>
        </div>
        <span className="tertiary-color font-semibold absolute left-0 top-3/4 text-3xl tertiary-font block rotate-90 hidden sm:block">
          My Portfolio
        </span>
      </div>
      <img
        src={code}
        className="absolute bottom-0 right-0 h-10 md:h-14 lg:h-18"
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a href="#about">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
      {/*<div className="absolute top-8 right-0 tertiary-font transform -translate-x-1/2 flex">
        <span className="text-Primary sel">
          {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </span>
      </div>*/}
    </section>
  );
};
