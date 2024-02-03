import React from "react";
import { Button, Heading, Image } from "../DefaultExport";
import { FaArrowRight } from "react-icons/fa6";
const Card = () => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image imageValue="image-1.jpg" alt="Latop Image" />
      <div class="p-5">
        <Heading
          tag="h5"
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          text="Noteworthy technology acquisitions 2021"
        />
        <Heading
          tag="h5"
          className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          text="Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order."
        />
        <Button
          buttonText="Read More"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          iconAlignment="both"
          icon={<FaArrowRight />}
        />
      </div>
    </div>
  );
};

export default Card;
