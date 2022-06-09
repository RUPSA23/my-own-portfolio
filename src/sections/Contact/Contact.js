import React from "react";
import emailjs from "emailjs-com";


const Contact = () => {
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_t4l70r9', 'template_j9g89aj', event.target, 'HMeUxEZOpdFgISvk7')
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

  return (
    <div className="bg-gray-700 mt-8 rounded p-8">
      <h2 className="text-3xl font-bold  text-white">Contact Me</h2>
      <form className=" mt-10 mx-20" onSubmit={sendEmail}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Please give a valid email"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium  text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Your Name"
            name="name"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-medium  text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <input
          type="submit" value="Submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
         
      
      </form>
    </div>
     
   
  );
};

export default Contact;
