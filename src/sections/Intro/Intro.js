import React from "react";

const Intro = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/public/myimg.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
          alt="my-img"
        />
        <div>
          <h1 class="text-5xl font-bold">I am Anusuya</h1>
          <p class="py-6">
           Hello there, This ia my portfolio.
          </p>
          <a className="btn btn-primary" href="https://drive.google.com/file/d/1IHWUoFkAhqBaFQoSA67Is2Cbi5AZlsFb/view" download>Download Resume</a>
 
        </div>
      </div>
    </div>
  );
};

export default Intro;
