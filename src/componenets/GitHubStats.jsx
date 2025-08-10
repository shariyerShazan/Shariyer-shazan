import React from 'react';

export default function GitHubStats() {
  return (
    <section className="group w-full mx-auto px-6 py-12">
      <button className="my-4 justify-center   cursor-pointer  w-full relative flex items-center  px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden group-hover:text-white">
                         <span className="text-lg font-bold">GitHub Stats</span>
                        
                          {/* Background fill effect */}
                          <span
                            className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-1000 ease-in-out group-hover:w-full -z-10 rounded-full"
                          ></span>
                        </button>

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
