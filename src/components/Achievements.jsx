import "./Achievements.css";

function Achievements() {

  const achievementsList = [
    {
      title: "Solved 150+ DSA Problems",
      description:
        "Solved over 150 problems on LeetCode . Focused on arrays, recursion, dynamic programming and advanced data structures. Improved problem-solving speed and optimized solutions."
    },
    {
      title: "Strong Frontend Development ",
      description:
        "Strengthened frontend development expertise through hands-on projects using React and modern JavaScript. Implemented component-driven architecture, dynamic rendering and responsive layouts with performance optimization in mind."
    },
    {
      title: "Built Multiple Projects",
      description:
        "Developed full-stack and frontend applications including a portfolio website, Discord API bot along with its invite website and implementation of ML. Focused on clean UI and structured architecture."
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>

      <div className="achievements-container">
        {achievementsList.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;