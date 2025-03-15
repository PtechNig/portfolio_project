import React from 'react';

const Contact = () => {
  return (
    <div className="text-white w-[90%] mx-auto px-4 md:px-10 flex flex-col lg:flex-row justify-center lg:justify-between">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center w-full">
        {/* Left Section */}
        <div className="w-full p-5 md:p-10 rounded-lg text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-10">
            Got a project in <br />
            <span className="text-[#00ADB5]">mind?</span>
          </h1>
          <div className="flex items-center justify-center lg:justify-start space-x-5">
            <img src="/assets/arrow-down.svg" alt="arrow-down" className="w-16 md:w-24" />
            <img src="/assets/climbing.svg" alt="climbing" className="w-32 md:w-48" />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full p-5 md:p-10 rounded-lg">
          <form>
            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="name" className="flex flex-col w-full">
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="placeholder:text-white bg-[#393E4680] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                />
              </label>

              <label htmlFor="email" className="flex flex-col w-full">
                Your email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder:text-white bg-[#393E4680] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                />
              </label>
            </div>

            <div className="mt-5">
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="placeholder:text-white w-full resize-none bg-[#393E4680] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              ></textarea>

              <button className="mt-4 flex gap-2 py-2 px-5 justify-center items-center rounded-md bg-[#00ADB5] border-2 border-[#00ADB5] hover:bg-transparent duration-500 text-white w-full md:w-auto">
                Send message
                <img src="/assets/sendmail.svg" alt="send" className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
