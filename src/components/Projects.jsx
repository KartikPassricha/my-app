import "./Projects.css";

function Projects() {

  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "Architected and developed a responsive single-page portfolio application using React, implementing reusable components, dynamic content rendering, and smooth navigation logic. Applied modern frontend practices including state management, structured CSS modularization, and interactive UI elements. Designed a cohesive dark-themed interface with attention to accessibility, responsiveness, and performance optimization to deliver a polished user experience across devices.",
      tech: "React, CSS, JavaScript",
      link: "https://github.com/KartikPassricha/my-app"
    },
    {
      title: "Nexus Bot",
      description:
        "Built a feature-rich Discord bot for server moderation and interactive entertainment, including games like Truth & Dare and integrated music playback functionality. Leveraged the Discord API for event handling, command processing, and role management, and utilized the YouTube API to stream music directly into voice channels. Implemented asynchronous programming to ensure smooth real-time interactions and optimized command responses for performance and reliability.",
      tech: "Python, JavaScript",
      link: "https://github.com/KartikPassricha/NexusBot"
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