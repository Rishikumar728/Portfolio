import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card
            title="File Sharing Web Application Based on Ranking"
            tools="Java, Spring Boot, Spring Security"
            description="This web app securely shares files without a network connection. It uses dynamic URLs, password protection, and expiration settings. Users can create local accounts to save their work within storage limits."
            imageUrl="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
          />
          <Card
            title="Sathyabama StudentHub: A Cloud-Driven Student Information Chatbot"
            tools="Google Cloud, SQL, HTML, CSS, JavaScript"
            description="A chatbot with login and signup options for teachers, students, and admins. Teachers and students can query, mark answers as invalid, and give suggestions, while the admin reviews suggestions for chatbot improvement."
            imageUrl="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
