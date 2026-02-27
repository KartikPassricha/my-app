import "./Skills.css";

function Skills() {

  const skills = [
    {
      name: "React",
      details: "1 year experience. Built portfolio, reusable components, dynamic rendering using map(), hooks like useEffect."
    },
    {
      name: "JavaScript",
      details: "Strong understanding of ES6+, array methods, DOM manipulation, async concepts, and event handling."
    },
    {
      name: "C++",
      details: "Solved 300+ DSA problems. Strong grasp of STL, recursion, trees, graphs, and dynamic programming."
    },
    {
      name: "Git & GitHub",
      details: "Version control, branching, merging, pull requests, and deployment workflows."
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