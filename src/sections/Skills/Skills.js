import React from "react";

const Skills = () => {
  return (
    <div>
     <div className="flex flex-col w-full">
        <div className="divider "></div>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-white">My Skills</h2>
      <ul class="steps  steps-vertical lg:steps-horizontal">
        <li data-content="✓" class="step step-accent">
          <p className="text-white">Html5</p>
        </li>
        <li data-content="✓" class="step step-accent">
          <p className="text-white">Css3</p>
        </li>
        <li data-content="✓" class="step step-accent">
          <p className="text-white">JavaScript</p>
        </li>
        <li data-content="✓" class="step step-accent">
          <p className="text-white">Node.js</p>
        </li>
        <li data-content="✓" class="step step-accent">
          <p className="text-white">Express.js</p>
        </li>
        <li data-content="✓" class="step step-accent">
          <p className="text-white">React.js</p>
        </li>
        <li data-content="✓" class="step step-accent">
          <p className="text-white">MongoDB</p>
        </li>
      </ul>
      <div className="flex flex-col w-full mb-20">
        <div className="divider "></div>
      </div>
    </div>
  );
};

export default Skills;
