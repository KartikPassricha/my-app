import "./Skills.css";

function Skills() {

  const skills = [
    {
      name: "React",
      details: "1 year experience. Built portfolio, reusable components, dynamic rendering using map() and many more."
    },
    {
      name: "JavaScript",
      details: "Strong understanding of ES6+, array methods, DOM manipulation, async concepts, and event handling."
    },
    {
      name: "C++",
      details: "Solved 150+ DSA problems. Strong grasp of STL, recursion, strings , and dynamic programming."
    },
    {
      name: "Git & GitHub",
      details: "Version control, branching, merging, pull requests, and deployment workflows."
    },
    {
      name: "Discord API",
      details: "Designed and deployed a Discord bot leveraging the Discord API via discord.py, implementing asynchronous event handling, command processing, and server automation features."
    },
    {
      name: "AI/ML",
      details: "Implemented probabilistic text generation using Markov chains with Python's Markovify library. Built a dynamic Truth & Dare Discord bot capable of generating context-aware prompts."
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-details">
              {skill.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;