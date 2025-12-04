import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

const badgeColors = {
  Frontend: "#00FFF6",
  Backend: "#FF188C",
  Languages: "#A1FF00",
  Tools: "#D06AFF",
};

const timeline = [
  {
    year: "2021–2024",
    title: "University of Wollongong in Dubai",
    role: "Bachelor of Computer Science",
    iconColor: "#66D36E",
    icon: <GraduationCap />,
    details: {
      company: "UOWD",
      duration: "Sep 2021- May 2024",
      position: "Bachelor of Computer Science",
      badges: [
        { label: "Backend development", category: "Backend" },
        { label: "Frontend development", category: "Frontend" },
        { label: "UI/UX Design", category: "Frontend" },
        { label: "Project Management", category: "Backend" },
        { label: "Artificial Intelligence", category: "Tools" },
        { label: "Cyber Security", category: "Tools" },
      ],
      bullets: [
        "Graduated with Distinction",
        "Deans Merit List",
        "Top 5 capstone projects",
        "Focused on full stack development",
      ],
    },
  },
  {
    year: "2024",
    title: "Orsers Consulting",
    role: "Software Analyst Intern",
    iconColor: "#00D1E0",
    icon: <Briefcase />,
    details: {
      company: "ORSERS Consulting",
      duration: "Jun 2024-Sep 2024",
      position: "Software Developer Intern",
      badges: [
        { label: "Oracle APEX", category: "Languages" },
        { label: "HTML", category: "Frontend" },
        { label: "CSS", category: "Frontend" },
        { label: "SQL", category: "Backend" },
        { label: "Figma", category: "Tools" },
      ],
      bullets: [
        "Redesigned UI/UX workflows and mock-ups in Figma.",
        "Developed dashboards with advanced queries and analytics.",
        "Created HTML/CSS pages to support user-facing components.",
        "Integrated APIs for text messaging functionality.",
        "Contributed to the development of features using Oracle APEX and PL/SQL.",
        "Tracked and resolved issues with Jira.",
      ],
    },
  },
  {
    year: "2024–2025",
    title: "Beraten Software",
    role: "Software Analyst Intern",
    iconColor: "#C63778",
    icon: <Briefcase />,
    details: {
      company: "Beraten Software",
      duration: "Nov 2024-Feb 2025",
      position: "Software Analyst Intern",
      badges: [
        { label: "JavaScript", category: "Languages" },
        { label: "HTML", category: "Frontend" },
        { label: "CSS", category: "Frontend" },
        { label: "SQL", category: "Backend" },
        { label: "ASP.NET Core", category: "Backend" },
        { label: "C#", category: "Backend" },
        { label: "Bootstrap", category: "Languages" },
        { label: "Figma", category: "Tools" },
      ],
      bullets: [
        "Resolved bugs and implemented new features.",
        "Optimized and debugged existing codebases, enhancing functionality, performance, and maintainability.",
        "Redesigned UI components through Figma and improved styling with Bootstrap/CSS, to create responsive, user-friendly interfaces.",
        "Developed and managed SQL Server databases, implementing C# classes, ASP.NET APIs, and optimized queries for efficient data handling.",
        "Authored user guide documentation for end-users and internal teams",
      ],
    },
  },
  {
    year: "2025",
    title: "Beraten Software",
    role: "Software Engineer",
    iconColor: "#8AC642",
    icon: <Briefcase />,
    details: {
      company: "Beraten Software",
      duration: "Feb 2025-Dec 2025",
      position: "Software Engineer",
      badges: [
        { label: "JavaScript", category: "Languages" },
        { label: "Python", category: "Languages" },
        { label: "HTML", category: "Frontend" },
        { label: "CSS", category: "Frontend" },
        { label: "SQL", category: "Backend" },
        { label: "ASP.NET Core", category: "Backend" },
        { label: "C#", category: "Backend" },
        { label: "Bootstrap", category: "Languages" },
        { label: "Figma", category: "Tools" },
      ],
      bullets: [
        "Developed full-stack web applications, contributing to UI/UX design, database schema creation and programming.",
        "Resolved bugs and implemented new features.",
        "Optimized and debugged existing codebases, enhancing functionality, performance, and maintainability.",
        "Designed UI/UX workflows for new applications.",
        "Developed and managed SQL Server databases.",
        "Assisted in developing and deploying chatbots.",
      ],
    },
  },
];

export const EducationExperience = () => {
  const [selected, setSelected] = useState(timeline[0]);

  return (
    <section id="education" className="min-h-screen">
      <div className="container py-24 px-4 relative">
        <div className="mb-5 opacity-0 animate-fade-in">
          <h1 className="homepage-title-font">
            Education & <span className="tertiary-color">Experience</span>
          </h1>
        </div>

        {/* Timeline container */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col gap-6">
            {timeline.map((item) => (
              <div
                key={item.year + item.title}
                onClick={() => setSelected(item)}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 cursor-pointer"
              >
                {/* Year */}
                <p className="text-lg sm:text-xl md:text-nowrap font-semibold tertiary-font tertiary-color w-full sm:w-24">
                  {item.year}
                </p>

                {/* Icon & line */}
                <div className="relative flex justify-center items-start sm:items-center w-full sm:w-16">
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2 hidden sm:block" />
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.iconColor }}
                  >
                    <span className="text-black text-lg">{item.icon}</span>
                  </div>
                </div>

                {/* Title & Role */}
                <div
                  className={`rounded-xl card-hover p-4 sm:p-6 flex-1 ${
                    selected.year === item.year && selected.title === item.title
                      ? "border-2 border-white"
                      : "bg-tertiary-light"
                  }`}
                >
                  <h3 className="text-lg secondary-font uppercase">
                    {item.title}
                  </h3>
                  <p className="text-md text-white/70 secondary-font sm:text-md">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full border-2 border-white lg:w-1/2 xl:w-2/5 bg-tertiary-light rounded-xl p-6 sm:p-8 shrink-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0 sm:mb-1">
              <h3 className="text-lg secondary-font uppercase text-left sm:text-2xl font-medium">
                {selected.details.company}
              </h3>
              <span className="text-right text-white/60 text-sm sm:text-right">
                {selected.details.duration}
              </span>
            </div>

            <p className="text-left secondary-font text-white/70 mb-4 text-md sm:text-md">
              {selected.details.position}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selected.details.badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 font-semibold rounded-full text-sm text-white"
                  style={{
                    backgroundColor: badgeColors[badge.category] + "20",
                    color: badgeColors[badge.category],
                  }}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <ul className="space-y-2 text-left text-sm sm:text-base">
              {selected.details.bullets.map((bullet, i) => (
                <li key={i}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
