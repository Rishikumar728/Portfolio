import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, tools, description, imageUrl }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <img
        className="rounded-t-lg w-full"
        src={imageUrl}
        alt="Project"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm font-light text-gray-600 dark:text-gray-300 mb-3">
          <strong>Tools:</strong> {tools}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
