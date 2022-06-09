import React from "react";

const Intro = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-gray-700 rounded" >
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="myimg.jpg"
            className="mask mask-hexagon max-w-sm rounded-lg shadow-2xl"
          />
          <div>
          <h1 class="text-5xl font-bold text-white">I am Anusuya</h1>
            <p class="py-6 px-6 text-white">
            Hello there, As a passionate Developer , I was elated to see an opening for a Junior Web Developer role. I have experience in HTML, CSS, and JavaScript, React. Combined with my recent internship in front-end web development, I am confident I have the skills to get a internship.
            </p>
            <a
              className="btn btn-primary"
              href="https://drive.google.com/file/d/1IHWUoFkAhqBaFQoSA67Is2Cbi5AZlsFb/view"
              download
              target='_blank'
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Intro;
