import React from 'react';

class Home extends React.Component {
   
   render() {
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <h1 className="mb-2 font-bold text-2xl">Home</h1>
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <div className=" text-2xl">
                     Welcome to your Jetstream application!
                  </div>
                  <div className="mt-6 text-gray-500">
                     Laravel Jetstream provides a beautiful, robust
                     starting point for your next Laravel application.
                     Laravel is designed to help you build your application
                     using a development environment that is simple,
                     powerful, and enjoyable. We believe you should love
                     expressing your creativity through programming, so we
                     have spent time carefully crafting the Laravel
                     ecosystem to be a breath of fresh air. We hope you
                     love it.
                  </div>
               </div>
            </div>
         </div>
      ); 
   }
};

export default Home;
