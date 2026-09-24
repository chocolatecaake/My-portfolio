import {
  GithubIcon,
  Instagram,
  LucidePanelRightOpen,
  Figma,
  Dribbble,
} from "lucide-react";
import { Link } from "react-router-dom";
import travelSite from "../assets/imgs/projectPics/travelSite.png";
import communitySite from "../assets/imgs/projectPics/communitySite.png";
import janSite from "../assets/imgs/projectPics/janSite.png";
import eduSite from "../assets/imgs/projectPics/eduSite.png";
import realEstateSite from "../assets/imgs/projectPics/realEstateSite.png";

const badgeColors = {
  WebDev: "#00FFF6",
  Programming: "#9BABFF",
  AI: "#FF188C",
  Db: "#A1FF00",
  Tools: "#D06AFF",
};

const projects = [
  {
    title: "Education Website",
    img: eduSite,
    drib: "https://dribbble.com/shots/27755289-Education-Website-Design",
    figma:
      "https://www.figma.com/design/nJfPRYF40JiArt6lp5F1A6/Legacy-website?node-id=0-1&p=f&t=zeUlpAXKgWrNHhT6-0",
    description:
      "A vibrant and playful education landing page for a communication coaching program focused on public speaking, confidence, articulation, and self-expression.",
    badges: [{ label: "Figma", category: "WebDev" }],
  },
  {
    title: "Travel Site",
    description:
      "A modern landing page designed for a travel site, inspired by minimal and eye-catching visuals",
    link: "kalm",
    drib: "https://dribbble.com/shots/27213660-Tropical-Travel-Guide-Website",
    img: travelSite,
    externalLink: "https://travelsrilanka.vercel.app/",
    badges: [
      { label: "Figma", category: "WebDev" },
      { label: "ReactJS", category: "WebDev" },
      { label: "TailwindCSS", category: "WebDev" },
    ],
  },
  {
    title: "JAN",
    slug: "jan",
    img: janSite,
    drib: "https://dribbble.com/shots/27167248-Minimal-Skincare-E-Commerce-Website-Design",
    figma:
      "https://www.figma.com/design/mwiP3znj8HPL7oW0ufmOR9/E-Commerce-website?node-id=3-648&t=KZNWgRJ823Xts7WS-1",
    description:
      "A modern responsive storefront designed to simplify skincare discovery and improve product browsing clarity.",
    badges: [
      { label: "ReactJS", category: "WebDev" },
      { label: "CSS", category: "WebDev" },
    ],
  },
  {
    title: "Real Estate Site",
    description:
      "A modern real estate web experience focused on simplicity, clarity, and premium aesthetics.",
    drib: "https://dribbble.com/shots/27297785-Modern-Real-Estate-Platform-Design",
    img: realEstateSite,
    badges: [{ label: "Figma", category: "WebDev" }],
  },
  {
    title: "Community Portal ",
    img: communitySite,
    drib: "https://dribbble.com/shots/27132326-Community-Platform-Landing-Page",
    description:
      "The landing page for a website to connect businesses and individuals in a community.",
    slug: "landingDesign",
    link: "kalm",
    badges: [{ label: "Figma", category: "WebDev" }],
  },
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

  // {
  //   title: "BOB",
  //   description:
  //     "Application to manage real estate listings, allows users to upload and rent property",
  //   link: "kalm",
  //   badges: [
  //     { label: "HTML", category: "WebDev" },
  //     { label: "CSS", category: "WebDev" },
  //     { label: "JavaScript", category: "Programming" },
  //     { label: "JSON", category: "WebDev" },
  //   ],
  // },
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
            const CardContent = (
              <div className="bg-tertiary-light p-6 py-8 rounded-xl flex flex-col gap-3 card-hover h-full space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-left secondary-font text-lg uppercase">
                    {project.title}
                  </div>
                  <div className="flex gap-3">
                    {project.gitlink && (
                      <a
                        href={project.gitlink}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon />
                      </a>
                    )}

                    {project.insta && (
                      <a
                        href={project.insta}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram />
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Figma />
                      </a>
                    )}
                    {project.drib && (
                      <a
                        href={project.drib}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Dribbble />
                      </a>
                    )}
                  </div>
                </div>
                <img src={project.img} className="rounded-xl" />

                <div className="flex gap-2 flex-wrap">
                  {project.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 font-semibold rounded-full text-sm"
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
                {project.externalLink && (
                  <a
                    className="primary-button-2 w-fit d-flex ml-auto"
                    href={project.externalLink}
                    target="_blank"
                  >
                    See Site
                  </a>
                )}
              </div>
            );
            if (project.externalLink) {
              return (
                <a
                  key={idx}
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {CardContent}
                </a>
              );
            }

            if (project.slug) {
              return (
                <Link
                  key={idx}
                  to={`/projects/${project.slug}`}
                  className="block h-full"
                >
                  {CardContent}
                </Link>
              );
            }

            return <div key={idx}>{CardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
};
