import React from "react";
import ParallaxTilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Ecommerce App: Dadsneakers"
              date="3 September, 2023"
              description="An ecommerce platform dedicated to sneaker enthusiasts, featuring a seamless shopping experience and secure payment integration."
              liveLink="https://dadsneakers.netlify.app/"
              sourceLink="https://github.com/ichiragtaluja/react-sneakers-app"
              standout={true}
              techStack={["React", "Tailwind CSS", "MongoDB"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Social Media App: Quack"
              date="15 September, 2023"
              description="Quack is a social media platform designed for connecting with friends, sharing thoughts, and discovering new content."
              liveLink="https://quackalot.netlify.app"
              sourceLink="https://github.com/ichiragtaluja/react-social-media"
              standout={true}
              techStack={["React", "Tailwind CSS", "Firebase"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Dating App: 30 Seconds Match"
              date="20 December, 2023"
              description="30 Seconds Match is a dating app that matches users based on their personality types, facilitating meaningful connections."
              liveLink="https://30secondmatch.000webhostapp.com/"
              sourceLink="https://github.com/ichiragtaluja/30SecondMatch"
              techStack={["React", "Node.js", "MongoDB"]}
            />
          </ParallaxTilt>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">More Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Kid's Game: Squiggle Quest"
              date="25 September, 2023"
              description="Squiggle Quest is an interactive game designed for kids to explore imaginative worlds, solve puzzles, and learn along the way."
              liveLink="https://squigglequest.netlify.app/"
              sourceLink="https://github.com/ichiragtaluja/Squiggle-Quest"
              techStack={["HTML", "CSS", "JavaScript"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="My Book Recommendations"
              date="29 December, 2022"
              description="My Book Recommendations is a curated list of top books in various genres, helping readers discover their next favorite read."
              liveLink="https://c85xtd.csb.app/"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-books-recommendation"
              techStack={["React", "JavaScript", "CSS"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Emoji Interpreter"
              date="28 December, 2022"
              description="Emoji Interpreter is a fun tool that allows users to type or click any emoji and instantly know its name and meaning."
              liveLink="https://u56knt.csb.app/"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-emoji-app"
              techStack={["React", "JavaScript", "CSS"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Speak in Dothraki Language"
              date="27 December, 2022"
              description="Speak in Dothraki Language is a language translator for Game of Thrones fans, allowing them to speak Dothraki like a pro!"
              liveLink="https://speakindothraki.netlify.app"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-dothraki-language"
              techStack={["React", "JavaScript", "CSS"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Speak like Minions!"
              date="26 December, 2022"
              description="Speak like Minions! is a text-to-speech tool that converts English text into the playful Banana Language of Minions."
              liveLink="https://speakgibberish.netlify.app/"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-banana-speak"
              techStack={["React", "JavaScript", "CSS"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="My Portfolio"
              date="25 December, 2022"
              description="My Portfolio is a showcase of all my projects, providing visitors with an overview of my skills and experience."
              liveLink="https://chiragtaluja.netlify.app/"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-portfolio"
              techStack={["React", "JavaScript", "CSS"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="General-Knowledge Quizz"
              date="24 December, 2022"
              description="General-Knowledge Quizz is a fun quiz that tests your knowledge across various topics, providing an enjoyable learning experience."
              liveLink="https://replit.com/@ChiragTaluja/markOne?embed=true"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-number-quiz"
              techStack={["React", "JavaScript"]}
            />
          </ParallaxTilt>
          <ParallaxTilt
            className="ParallaxTilt"
            perspective={500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
          >
            <ProjectCard
              title="Geography-Quizz Game"
              date="23 December, 2022"
              description="Geography-Quizz Game is an educational quiz that challenges players to test their geography knowledge while having fun."
              liveLink="https://replit.com/@ChiragTaluja/neogcamp-cli-app-quiz?embed=true"
              sourceLink="https://github.com/ichiragtaluja/neogcamp-cli-app-quiz"
              techStack={["JavaScript"]}
            />
          </ParallaxTilt>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({
  title,
  date,
  description,
  liveLink,
  sourceLink,
  standout,
  techStack,
}) => {
  const cardClassName = standout ? "bg-white" : "bg-white";

  return (
    <div
      className={`shadow-lg p-6 flex flex-col rounded-lg ${cardClassName}`}
      style={{ minHeight: "320px" }} // Dynamic height
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-gray-200 py-1 px-2 rounded-full mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex space-x-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Live Project
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
