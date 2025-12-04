import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education/ Experience", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selected, setSelected] = useState(navItems[0].name);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href);
      return { name: item.name, element: el };
    });

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sec of sections) {
        if (!sec.element) continue;

        const top = sec.element.offsetTop;
        const height = sec.element.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setSelected(sec.name);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav
      className={cn(
        "fixed backdrop-blur z-40 mt-5 ml-5 transition-all rounded-md duration-300 border-2 py-3 md:rounded-full secondary-font px-5 md:px-10",
        isScrolled ? "py-3 bg-background backdrop-blur-md" : "py-5"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => {
            const isActive = selected === item.name;
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative flex items-center px-4 rounded transition-colors hover:tertiary-color font-medium"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 w-3 h-3 bg-tertiary rounded-sm" />
                )}
                <span className={isActive ? "pl-5 tertiary-color" : ""}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          {navItems.map((item, key) => {
            const isActive = selected === item.name;
            return (
              <a
                key={key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-2 rounded transition-colors hover:bg-tertiary-200 hover:tertiary-color ",
                  isActive ? "bg-black-300 font-semibold" : ""
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
