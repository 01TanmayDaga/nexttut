import React from "react";

const ContactUsForm = () => {
  return (
    <div className="bg-white p-8 gap-8 flex flex-row rounded-2xl   w-full justify-evenly h-screen">
        
      
      <div className="bg-white p-8 rounded-2xl  w-full h-fit ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us by filling the form
        </h2>
        <p className="mb-4 text-sm">We appreciate your effort and time, please fill in the  following details</p>
        <form action="#" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-md text-sm font-medium rounded-full text-black bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>




      
      <div className="bg-white p-8 rounded-2xl  w-full h-fit  text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Information</h2>
        <div className="text-left space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Office Address:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Room 217, 1st floor<br />
              Department of Bioscience and Bioengineering<br />
              Indian Institute of Technology<br />
              Jodhpur 342030, India
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact Details:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tel: +91 (0) 291280 1211<br />
              E-mail: <a href="mailto:pyadav@iitj.ac.in" className="text-blue-500 hover:text-blue-700">pyadav@iitj.ac.in</a><br />
              Webpage: <a href="http://home.iitj.ac.in/~pyadav" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">http://home.iitj.ac.in/~pyadav</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ContactUsForm;
