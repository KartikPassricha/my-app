import "./Projects.css";

function Projects() {

  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a responsive personal portfolio using React. Implemented component-based architecture, reusable cards, and smooth scrolling navigation. Focused on UI/UX and clean dark theme.",
      tech: "React, CSS, JavaScript",
      link: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Nexus Bot",
      description:
        "Built a client-server communication system using Python sockets. Implemented data transmission, acknowledgment handling, and real-time message exchange between systems.",
      tech: "Python, Networking, TCP/IP",
      link: "https://github.com/yourusername/socket-app"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;