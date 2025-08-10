import React from 'react';

export default function MySkills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>

      {/* Frontend */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Frontend & UI</h3>
        <p className="flex justify-center gap-4 flex-wrap mb-4">
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,react,redux,nextjs,tailwind,materialui"
            alt="Frontend skills"
            className="max-h-12"
          />
        </p>
        <p className="flex justify-center gap-4 flex-wrap">
          <img
            src="https://img.shields.io/badge/ShadcnUI-000000?style=for-the-badge&logo=none&logoColor=white"
            alt="ShadcnUI"
            className="h-10"
          />
          <img
            src="https://img.shields.io/badge/Zod-ECECEC?style=for-the-badge&logo=none&logoColor=black"
            alt="Zod"
            className="h-10"
          />
        </p>
      </div>

      {/* Backend & Database */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Backend & Database</h3>
        <p className="flex justify-center gap-4 flex-wrap mb-4">
          <img
            src="https://skillicons.dev/icons?i=nodejs,express,mongodb,firebase"
            alt="Backend skills"
            className="max-h-12"
          />
        </p>
        <p className="flex justify-center gap-4 flex-wrap">
          <img
            src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=none&logoColor=white"
            alt="Mongoose"
            className="h-10"
          />
          <img
            src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
            alt="Supabase"
            className="h-10"
          />
        </p>
      </div>

      {/* Payment & Auth */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Payment & Auth</h3>
        <p className="flex justify-center gap-4 flex-wrap">
          <img
            src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white"
            alt="Stripe"
            className="h-10"
          />
          <img
            src="https://img.shields.io/badge/SSLCommerz-0177B5?style=for-the-badge&logo=ssl&logoColor=white"
            alt="SSLCommerz"
            className="h-10"
          />
        </p>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">Tools & Platforms</h3>
        <p className="flex justify-center gap-4 flex-wrap">
          <img
            src="https://skillicons.dev/icons?i=git,github,vscode,figma,postman,npm,vercel,netlify"
            alt="Tools and platforms"
            className="max-h-12"
          />
        </p>
      </div>
    </section>
  );
}
