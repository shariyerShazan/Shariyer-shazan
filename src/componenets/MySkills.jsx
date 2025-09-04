import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = {
  frontend: [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
    { name: "ShadcnUI", icon: "https://img.shields.io/badge/ShadcnUI-000000?style=for-the-badge&logo=none&logoColor=white" },
    { name: "Zod", icon: "https://img.shields.io/badge/Zod-ECECEC?style=for-the-badge&logo=none&logoColor=black" },
  ],
  backend: [
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Mongoose", icon: "https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=none&logoColor=white" },
    { name: "Supabase", icon: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
  ],
  payment: [
    { name: "Stripe", icon: "https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" },
    { name: "SSLCommerz", icon: "https://img.shields.io/badge/SSLCommerz-0177B5?style=for-the-badge&logo=ssl&logoColor=white" },
  ],
  tools: [
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "npm", icon: "https://skillicons.dev/icons?i=npm" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
  ],
};

export default function MySkills() {
  const [color, setColor] = useState(""); 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("frontend"); 

  useEffect(() => {
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim(); 
    setColor(primaryColor);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const categories = Object.keys(skills);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-primary mb-12 relative after:block after:w-24 after:h-1 after:bg-primary after:rounded mt-4 after:mx-auto">
        My Skills
      </h2>

      {/* Category buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer px-6 py-2 rounded-full font-semibold transition-all duration-300
              ${activeCategory === cat ? "bg-primary text-white" : "border border-primary text-primary hover:bg-primary hover:text-white"}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid cursor-pointer grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills[activeCategory].map((skill, index) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-duration={`${index*300}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              boxShadow: hoveredIndex === index ? `-5px 5px 0 0 ${color}` : "none",
              transition: "box-shadow 0.3s ease-in-out", 
            }}
            className="flex flex-col items-center border-primary border-2 justify-center p-4 bg-white dark:bg-gray-800 rounded-xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 "
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
