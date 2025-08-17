import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

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
import shariyerFiveteen from "../../public/assets/shazan-fiveteen.jpg";
import shariyerSixteen from "../../public/assets/shazan-sixteen.jpg";
import { useNavigate } from "react-router";

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
  shariyerFiveteen,
  shariyerSixteen,
];

const GallerySection = () => {
    const navigate = useNavigate()
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-16 py-12 bg-gradient-to-r from-white via-gray-50 to-white">
      {/* Left side: Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-md bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
          >
          <div >
          <img
              src={img}
              alt={`shariyer shazan ${index + 1}`}
              title="Shariyer Shazan"
              className="w-full h-48 cursor-pointer object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110 hover:opacity-90"
            />
          </div>
          </motion.div>
        ))}
      </div>

      {/* Right side: About Me */}
      <motion.div
        className="space-y-6 lg:mr-32 "
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="font-semibold text-4xl flex items-center gap-3 text-primary">
          <FaStar className="text-yellow-500" />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Shariyer Shazan
          </span>
          <FaStar className="text-yellow-500" />
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          Hi, I’m <span className="font-medium text-indigo-600">Shariyer Shazan</span>.  
          This is my portfolio blog section. I love building{" "}
          <span className="font-medium text-purple-600">web applications</span>,  
          sharing my journey, and writing about{" "}
          <span className="font-medium text-pink-600">new technologies</span> I learn every day.
        </p>

        <motion.button
        onClick={()=>navigate("/contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg  transition"
        >
          Contact with me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
