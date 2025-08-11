import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function MySkills() {
  return (
    <section className="group relative max-w-full mt-12 border-t-1 border-gray-400  mx-auto px-6 py-12">
      <button className="my-4 justify-center   cursor-pointer  w-full relative flex items-center  px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden group-hover:text-white">
                         <span className="text-lg font-bold">Skills</span>
                        
                          {/* Background fill effect */}
                          <span
                            className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-1000 ease-in-out group-hover:w-full -z-10 rounded-full"
                          ></span>
                        </button>

     <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
             {/* Frontend */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-6 text-center text-primary">
          Frontend & UI
        </h3>
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,react,redux,nextjs,tailwind,materialui"
            alt="Frontend skills"
            className="max-h-14"
          />
        </div>
        <div className="flex justify-center flex-wrap gap-6">
          <img
            src="https://img.shields.io/badge/ShadcnUI-000000?style=for-the-badge&logo=none&logoColor=white"
            alt="ShadcnUI"
            className="h-12 rounded-md"
          />
          <img
            src="https://img.shields.io/badge/Zod-ECECEC?style=for-the-badge&logo=none&logoColor=black"
            alt="Zod"
            className="h-12 rounded-md"
          />
        </div>
      </div>

      {/* Backend & Database */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-6 text-center text-primary">
          Backend & Database
        </h3>
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          <img
            src="https://skillicons.dev/icons?i=nodejs,express,mongodb,firebase"
            alt="Backend skills"
            className="max-h-14"
          />
        </div>
        <div className="flex justify-center flex-wrap gap-6">
          <img
            src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=none&logoColor=white"
            alt="Mongoose"
            className="h-12 rounded-md"
          />
          <img
            src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
            alt="Supabase"
            className="h-12 rounded-md"
          />
        </div>
      </div>

      {/* Payment & Auth */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-6 text-center text-primary">
          Payment & Auth
        </h3>
        <div className="flex justify-center flex-wrap gap-6">
          <img
            src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white"
            alt="Stripe"
            className="h-12 rounded-md"
          />
          <img
            src="https://img.shields.io/badge/SSLCommerz-0177B5?style=for-the-badge&logo=ssl&logoColor=white"
            alt="SSLCommerz"
            className="h-12 rounded-md"
          />
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="text-3xl font-semibold mb-6 text-center text-primary">
          Tools & Platforms
        </h3>
        <div className="flex justify-center flex-wrap gap-6">
          <img
            src="https://skillicons.dev/icons?i=git,github,vscode,figma,postman,npm,vercel,netlify"
            alt="Tools and platforms"
            className="max-h-14 rounded-md"
          />
        </div>
      </div>
     </div>
    </section>
  );
}
