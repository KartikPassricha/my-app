import "./Achievements.css";

function Achievements() {

  const achievementsList = [
    {
      title: "Solved 300+ DSA Problems",
      description:
        "Solved over 300 problems across platforms like LeetCode and CodeStudio. Focused on arrays, recursion, dynamic programming, graphs, and advanced data structures. Improved problem-solving speed and optimized solutions."
    },
    {
      title: "Strong Academic Performance",
      description:
        "Maintained consistent academic performance with strong fundamentals in algorithms, operating systems, and networking. Regularly ranked among top performers in coursework."
    },
    {
      title: "Built Multiple Projects",
      description:
        "Developed full-stack and frontend applications including a portfolio website, socket programming system, and DSA tracker. Focused on clean UI and structured architecture."
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