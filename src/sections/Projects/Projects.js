import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-3xl mb-8">My Projects</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center ">
        <div className="card w-96 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure className="px-10 pt-10">
            <img src="manufacture_app.jpeg" className="h-80" alt="" />
          </figure>
          <div class="card-body">
            <h2 class="font-bold text-2xl text-center">Tools Manufacturer</h2>

            <label for="my-modal-7" class="btn modal-button">
              Details
            </label>

            <input type="checkbox" id="my-modal-7" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg text-red-400">
                  Project Name: Tools Manufacturer
                </h3>
                <p class="py-4">
                  <ul className="list-disc text-left mb-4">
                    <p className="font-bold"> Description: </p>
                    <li>This is a full stack Manufacturer company website. </li>
                    <li>Implemented Authentication system.</li>
                    <li>Implemented Admin system.</li>
                    <li>Admin can add tool items</li>
                    <li>Admin can make user admin</li>
                    <li>Admin can see her/his own profile on dashboard</li>
                    <li>
                      After login User can purchase any tool with a minimum
                      quantity
                    </li>
                    <li>User can see their own orders on dashboarde</li>
                    <li>User can see their own Profile on dashboard </li>
                    <li> User can add a review about the site. </li>
                    <li>Implemented a simple payment method.</li>
                  </ul>

                  <ul className="list-disc text-left">
                    <p className="font-bold ">Technology:-</p>
                    <li>React.js</li>
                    <li> Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>React-router</li>
                    <li>React-firebase-hooks</li>
                    <li>DaisyUI</li>
                    <li>Tailwind css</li>
                  </ul>
                  <a
                    className="btn btn-sm mr-2 mt-4"
                    href="https://github.com/RUPSA23/manufacturer-website-client-side"
                    target="_blank"
                  >
                    Client
                  </a>
                  <a
                    class="btn btn-sm mr-2"
                    href="https://github.com/RUPSA23/manufacturer-website"
                    target="_blank"
                  >
                    Server
                  </a>
                  <a
                    class="btn btn-sm"
                    href="https://manufacturer-tools-project.web.app/home"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
                <div class="modal-action">
                  <label for="my-modal-7" class="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <figure className="px-10 pt-10">
            <img
              src="warehouse_app.jpeg"
              className="overflow-auto h-80"
              alt=""
            />
          </figure>
          <div class="card-body">
            <h2 class="font-bold text-2xl text-center">
              Women’s Wear Warehouse{" "}
            </h2>

            <label for="my-modal-6" class="btn modal-button">
              Details
            </label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg text-red-400">
                  Project Name: Women’s Wear Warehouse
                </h3>
                <p class="py-4">
                  <ul className="list-disc text-left mb-4">
                    <p className="font-bold"> Description: </p>
                    <li>This is a full stack Warehouse company website. </li>
                    <li>Implemented Authentication system.</li>
                    <li>After login User can update any dress’s quantity.</li>
                    <li>User can delete any dress.</li>
                    <li>User can add a dress</li>
                    <li>User can see specific items that added by them.</li>
                  </ul>

                  <ul className="list-disc text-left">
                    <p className="font-bold ">Technology:-</p>
                    <li>React.js</li>
                    <li> Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>React-router</li>
                    <li>React-firebase-hooks</li>
                    <li>Bootstrap</li>
                    <li>Tailwind css</li>
                  </ul>
                  <a
                    className="btn btn-sm mr-2 mt-4"
                    href="https://github.com/RUPSA23/warehouse-management-client-side"
                    target="_blank"
                  >
                    Client
                  </a>
                  <a
                    className="btn btn-sm mr-2"
                    href="https://github.com/RUPSA23/warehouse-management-server-side"
                    target="_blank"
                  >
                    Server
                  </a>
                  <a
                    class="btn btn-sm"
                    href="https://warehouse-management-pro-7fb8c.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </p>
                <div class="modal-action">
                  <label for="my-modal-6" class="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
