import React from "react";

const SuggestionsLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fit">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
      </div>
      <p className="ml-2 text-white">Finding the best suggestions...</p>
    </div>
  );
};

export default SuggestionsLoader;
