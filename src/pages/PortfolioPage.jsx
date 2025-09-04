// PortfolioPage.jsx
import React from "react";
import ProjectCard from "../componenets/ProjectsCard";
// import flatflow from "../assets/flatflow.png";
// import noHunger from "../assets/noHunger.png";
// import mealMart from "../assets/mealMart.png";
// import jobDrop from "../assets/jobDrop.png";

function PortfolioPage() {
  const projects = [
    {
      img: "https://i.ibb.co.com/nqRvCn6Y/Screenshot-2025-09-04-at-9-06-23-PM.png",
      name: "FlatFlow - Building Management App (Full Stack Website | Admin | Member | User)",
      description: [
        "FlatFlow is an online apartment/flat management web application with full responsiveness.",
        "Users can browse available apartments, booked apartments, and manage their bookings.",
        "Member can manage their bookings, and pay rent with coupons.",
        "Admin can add, update, or remove apartments, monitor bookings, see payment history, manage members, make coupons.",
      ],
      technology: "React.js | Redux | Node.js | Express.js | MongoDB | Mongoose | Firebase | React-Router | JWT | Tailwind | DaisyUI | Stripe | Rest APIs | Cloudinary | Axios",
      liveLink: "https://flatflow.netlify.app/",
      clientSide: "https://github.com/shariyerShazan/FlatFlow-client",
      serverSide: "https://github.com/shariyerShazan/FlatFlow-server",
    },
    {
      img: 'https://i.ibb.co.com/ksFFF8TW/Screenshot-2025-09-04-at-9-19-40-PM.png',
      name: "MealMart - Restaurant App (Full Stack Website | Admin | User)",
      description: [
        "Full-stack web application with role-based access for Users & Admins.",
        "Users: Register/Login, Email Verification, Forgot/Reset Password, Browse Restaurants & Cuisines, Add to Cart, Place Orders, Track Orders, Stripe Payment Integration.",
        "Admins: Manage Restaurants, Add/Edit/Delete Menus, Manage Orders (Confirm, Preparing, Out for Delivery, Delivered).",
      ],
      technology: "React.js | TypeScript | Redux Toolkit | Tailwind | ShadCN UI | Node.js | Express.js | MongoDB | Mongoose | Stripe Checkout | Mailtrap | Cloudinary | Multer | Axios",
      liveLink: "#",
      clientSide: "https://github.com/shariyerShazan/MealMart-restaurant-client",
      serverSide: "https://github.com/shariyerShazan/MealMart-restaurant-server",
    },
    {
      img: "https://i.ibb.co.com/9HkNf12t/Screenshot-2025-09-04-at-9-04-47-PM.png",
      name: "NoHunger - Food Donation Platform (Full Stack Website | Donor | User)",
      description: [
        "NoHunger is an online food donation web application designed to reduce food waste.",
        "Donors can post food items, remove items, edit items, and can approve or reject User’s food request.",
        "User can browse available food items, and claim donations.",
      ],
      technology: "React.js | Node.js | Express.js | MongoDB | Mongoose | Firebase | React-Router | JWT | Tailwind | DaisyUI | Rest APIs | AOS | Framer-motion | Axios",
      liveLink: "https://nohunger-ccf5b.web.app/",
      clientSide: "https://github.com/shariyerShazan/NoHunger",
      serverSide: "https://github.com/shariyerShazan/NoHunger-server",
    },
    {
      img: 'https://i.ibb.co.com/Pzg29FsG/Screenshot-2025-09-04-at-9-09-35-PM.png',
      name: "JobDrop - Job Portal Web Application (Full Stack Website | Job Seeker | Recruiter)",
      description: [
        "Full-stack job portal with role-based access for Job Seekers and Recruiters.",
        "Job Seekers: Browse and apply for jobs.",
        "Recruiters: Create, edit, delete job postings, review applications, and accept/reject candidates.",
      ],
      technology: "React.js | Node.js | Express.js | MongoDB | Mongoose | JWT | Axios | Tailwind | React-Context | React-Router | Cookie-Parser | AOS | Motion",
      liveLink: "https://jobdrop-shazan.netlify.app/",
      clientSide: "https://github.com/shariyerShazan/JobDrop-client",
      serverSide: "https://github.com/shariyerShazan/JobDrop-server",
    },
  ];

  return (
    <section className="max-w-7xl min-h-screen mx-auto p-8 relative">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Shariyer Shazan's <span className='text-text'>Projects</span>
      </h2>

      {/* Desktop: two columns with staggered margin */}
      <div className="hidden md:flex relative gap-8">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary opacity-30 translate-x-[-50%]" />

        <div className="flex flex-col gap-8 w-1/2">
          {projects.filter((_, idx) => idx % 2 === 0).map((proj, idx) => (
            <ProjectCard
              key={idx}
              {...proj}
              marginTop={idx === 0 ? "150px" : ""} // staggered effect
            />
          ))}
        </div>

        <div className="flex flex-col gap-8 w-1/2">
          {projects.filter((_, idx) => idx % 2 === 1).map((proj, idx) => (
            <ProjectCard
              key={idx}
              {...proj}
              marginTop={idx === 0 ? "0" : ""} // staggered effect
            />
          ))}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden grid grid-cols-1 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} marginTop="0" />
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
