import React from 'react'

const DescriptionBox = () => {
  return (
    <div className="ml-10">
       <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
  <div className="flex items-center mb-5">
    <div className="tag bg-blue-500 text-white py-2 px-4 rounded-full mr-3">
      Description
    </div>
    <div className="tag bg-blue-500 text-white py-2 px-4 rounded-full">
      Review(122)
    </div>
  </div>
  <div className="content-container flex flex-col gap-5 items-center justify-center p-10 bg-gray-100 rounded-md">
    <p className="text-lg text-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p className="text-lg text-gray-800">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>

       

    </div>
  )
}

export default DescriptionBox