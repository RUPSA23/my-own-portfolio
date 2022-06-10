import React from "react";

const About = () => {
  return (
    <div class="hero min-h-screen rounded  bg-gray-700">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="work.jpg"
          className="mask mask-hexagon max-w-sm rounded-lg shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          alt=""
        />
        <div>
          <h1 class="text-5xl font-bold text-white">About Me</h1>
          <p class="py-6 text-white px-6">
            I am Anusuya Bhattacharjee from India, Am doing BCA from Manipal University Jaipur and now i am in 2nd year. I am learning web development from last 1 year, and currently i am learning web development from Programming Hero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
