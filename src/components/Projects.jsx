import { GithubIcon, Instagram, LucidePanelRightOpen } from "lucide-react";

const badgeColors = {
  WebDev: "#00FFF6",
  Programming: "#9BABFF",
  AI: "#FF188C",
  Db: "#A1FF00",
  Tools: "#D06AFF",
};

const projects = [
  {
    title: "KALM.",
    description:
      "An automated scheduling application designed to reduce academic stress and improve work-life balance for university students.",
    gitlink: "https://github.com/chocolatecaake/KALM_APPLICATION",
    insta: "https://www.instagram.com/kalm._.app/",
    badges: [
      { label: "AI", category: "AI" },
      { label: "Machine Learning", category: "AI" },
      { label: "Python", category: "Programming" },
      { label: "ReactJS", category: "WebDev" },
      { label: "Firebase", category: "Db" },
      { label: "Flask", category: "WebDev" },
      { label: "GoogleFit API", category: "WebDev" },
    ],
  },
  {
    title: "SOOZ",
    description:
      "A progressive eCommerce web application that provides an engaging, responsive, and dynamic shopping experience, even offline.",
    link: "kalm",
    badges: [
      { label: "HTML", category: "WebDev" },
      { label: "CSS", category: "WebDev" },
      { label: "JavaScript", category: "Programming" },
      { label: "NodeJS", category: "WebDev" },
    ],
  },
  {
    title: "Inventory Forecast ",
    description:
      "Used machine learning and seasonal data to predict inventory needs and optimize stock.",
    link: "kalm",
    badges: [
      { label: "AI", category: "AI" },
      { label: "Machine Learning", category: "AI" },
      { label: "Python", category: "Programming" },
    ],
  },
  {
    title: "Bus Seating Plan Allocation ",
    description:
      "A bus seating plan allocation system that efficiently manages seat assignments.",
    link: "kalm",
    badges: [
      { label: "C++", category: "Programming" },
      { label: "OOP", category: "Programming" },
      { label: "Procedural Programming", category: "Programming" },
    ],
  },
  {
    title: "Live Anomaly Detection",
    description:
      "Real-time anomaly detection within continuous data streams, identifying anomalies, adapting to concept drift and handling seasonal variations to ensure accurate, real-time alerts.",
    link: "kalm",
    gitlink:
      "https://github.com/chocolatecaake/Anomaly-Detection-in-streaming-data",
    badges: [
      { label: "AI", category: "AI" },
      { label: "Machine Learning", category: "AI" },
      { label: "Python", category: "Programming" },
    ],
  },
  {
    title: "BOB",
    description:
      "Application to manage real estate listings, allows users to upload and rent property",
    link: "kalm",
    badges: [
      { label: "HTML", category: "WebDev" },
      { label: "CSS", category: "WebDev" },
      { label: "JavaScript", category: "Programming" },
      { label: "JSON", category: "WebDev" },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container py-24 px-6 relative">
        <div className="mb-5 opacity-0 animate-fade-in">
          <h1 className="homepage-title-font">
            My <span className="tertiary-color">Projects</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            return (
              <div
                key={idx}
                className="bg-tertiary-light p-6 py-8 rounded-xl flex flex-col gap-3 card-hover h-full space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left secondary-font text-lg uppercase">
                    {project.title}
                  </div>
                  <div className="flex gap-3">
                    <div>
                      {project.gitlink ? (
                        <a href={project.gitlink} target="_blank">
                          <GithubIcon />
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {project.insta ? (
                        <a href={project.insta} target="_blank">
                          <Instagram />
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 font-semibold rounded-full bg-white/10 text-white text-sm"
                      style={{
                        backgroundColor: badgeColors[badge.category] + "20",
                        color: badgeColors[badge.category],
                      }}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>

                <div className="text-left">{project.description}</div>
                {/*<a className="primary-button-2 mt-auto w-full" href="#contact">
                  Learn More
                </a>*/}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
