import React, { useEffect, useState, useRef } from "react";

export default function EducationTimeline() {
  const [fillHeight, setFillHeight] = useState(0);
  const sectionRef = useRef(null);

  const educationData = [
    {
      side: "left",
      title: "High School",
      institute: "Saint Louis High School",
      duration: "2015 - 2021",
      gpa: "GPA: 5.00",
      extra: "Background: Science",
    },
    {
      side: "right",
      title: "College",
      institute: "BAF Shaheen College Dhaka",
      duration: "2021 - 2023",
      gpa: "GPA: 5.00",
      extra: "Background: Science",
    },
    {
      side: "left",
      title: "University",
      institute: "Southeast University",
      duration: "2024 - Present",
      gpa: "Department: CSE",
      extra: "",
    },
    {
      side: "right",
      title: "Course",
      institute: "Programming Hero",
      duration: "MERN Stack Course",
      gpa: "",
      extra: "",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.min((rect.height, windowHeight ) - (rect.top ));
      const percent = Math.min(1, Math.max(0, visible  / rect.height));
      setFillHeight(percent * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative ">
      <div className="container mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 ">
          <div
            className="absolute top-0 left-0 w-full bg-primary transition-all duration-200"
            style={{ height: `${fillHeight}%` }}
          ></div>
        </div>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              edu.side === "left" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 p-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary relative">
                <h3 className="text-xl font-bold text-primary">{edu.title}</h3>
                <p className="text-lg font-semibold">{edu.institute}</p>
                <p className="text-gray-600">{edu.duration}</p>
                {edu.gpa && <p className="text-gray-800">{edu.gpa}</p>}
                {edu.extra && <p className="text-gray-600">{edu.extra}</p>}
                <span
                  className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"
                  style={{
                    [edu.side === "left" ? "right" : "left"]: "-34px",
                  }}
                ></span>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
