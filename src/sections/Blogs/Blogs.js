import React from "react";

const Blogs = () => {
  return (
    <div class="w-full">
      <div class=" mt-20 bg-white h-screen">
        <div class="inline-block align-middle px-8 md:px-12 lg:w-1/2">
          <div>
            <span class="text-2xl font-semibold text-gray-800 md:text-4xl">
              ⏰ Coming<span class="ml-2 text-blue-600">Soon</span> ⏰
            </span>
            <h1 class="py-5 text-5xl font-semibold text-gray-800 md:text-6xl">
              My<span class="ml-2 text-blue-600">Blogs</span>
            </h1>

            <p class="mt-2 text-sm text-gray-500 md:text-lg">
              <a href="https://fontgenerator.org/">Recently I have</a> no blogs
              <strong> but i will</strong> try to write some blogs. After that i will
             post my blogs here.
            </p>
            
            <div class="flex space-x-3 justify-center mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100081910032895" target="_blank"
                class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
