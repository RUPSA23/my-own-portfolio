import React from "react";

const About = () => {
  return (
    <div class="hero min-h-screen rounded p-20 bg-gray-700">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="work.jpg"
          className="mask mask-hexagon max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold text-white">About Me</h1>
          <p class="py-6 text-white px-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
