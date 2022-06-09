import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-3xl mb-8">My Projects</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="manufacture_app.jpeg"
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="font-bold text-2xl text-center">Tools Manufacturer</h2>
            <p>
              This is a Manufacturer company website. Admin can add tool items,
              make user admin. User can purchase any tool with a minimum
              quantity. They can see their orders and their profile. User can
              add a review about the site. Implement a simple payment method.
            </p>
            <div class="card-actions justify-center mt-2">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="warehouse_app.jpeg"
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="font-bold text-2xl text-center">
              Women’s Wear Warehouse{" "}
            </h2>
            <p>
              This is a Warehouse company website. User can update any dress’s
              quantity. They can delete any dress. User can add a dress. They
              can see specific items that added by them. Implemented
              Authentication system.
            </p>
            <div class="card-actions justify-center">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
