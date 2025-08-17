import React from "react";
import shariyerOne from "../../public/assets/shazan-one.jpg";
import shariyerTwo from "../../public/assets/shazan-two.jpg";
import shariyerThree from "../../public/assets/shazan-three.jpg";
import shariyerFour from "../../public/assets/shazan-four.jpg";
import shariyerFive from "../../public/assets/shazan-five.jpg";
import shariyerSix from "../../public/assets/shazan-six.jpg";
import shariyerSeven from "../../public/assets/shazan-seven.jpg";
import shariyerEight from "../../public/assets/shazan-eight.jpg";
import shariyerNine from "../../public/assets/shazan-nine.jpg";
import shariyerTen from "../../public/assets/shazan-ten.jpg";
import shariyerEleven from "../../public/assets/shazan-eleven.jpg";
import shariyerTwelve from "../../public/assets/shazan-twelve.jpg";
import shariyerThirteen from "../../public/assets/shazan-thirteen.jpg";
import shariyerFourteen from "../../public/assets/shazan-fourteen.jpg";

const images = [
  shariyerOne,
  shariyerTwo,
  shariyerThree,
  shariyerFour,
  shariyerFive,
  shariyerSix,
  shariyerSeven,
  shariyerEight,
  shariyerNine,
  shariyerTen,
  shariyerEleven,
  shariyerTwelve,
  shariyerThirteen,
  shariyerFourteen,
];

const BlogSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
      {/* Left side: Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-150 animate-fadeIn"
          >
            <img
              src={img}
              alt={`shariyer shazan ${index + 1}`}
              title="Shariyer Shazan"
              className="w-full h-40 object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Right side: About Me */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Shariyer Shazan</h2>
        <p className="text-gray-600">
          Hi, I’m Shariyer Shazan. This is my portfolio blog section. I love
          working on web development projects, sharing my journey, and writing
          about new technologies I learn every day.
        </p>
      </div>
    </section>
  );
};

export default BlogSection;
