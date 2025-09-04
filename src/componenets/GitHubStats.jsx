import React from 'react';

export default function GitHubStats() {
  return (
    <section className="group w-full mx-auto px-6 py-12">
       <h2 className="text-4xl font-bold text-center text-primary mb-12 relative after:block after:w-24 after:h-1 after:bg-primary after:rounded mt-4 after:mx-auto">
         GitHub Status
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
        <img
          src="https://github-readme-stats.vercel.app/api?username=shariyerShazan&show_icons=true&theme=radical&hide_border=true"
          alt="GitHub Stats"
          className="w-full md:w-1/2"
        />
        <img
          src="https://streak-stats.demolab.com?user=shariyerShazan&theme=radical&hide_border=true"
          alt="GitHub Streak Stats"
          className="w-full md:w-1/2"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <img
          src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shariyerShazan&theme=github_dark"
          alt="Most Commit Language"
          className="w-full md:w-1/2"
        />
        <img
          src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shariyerShazan&theme=github_dark"
          alt="Repos Per Language"
          className="w-full md:w-1/2"
        />
      </div>
    </section>
  );
}
