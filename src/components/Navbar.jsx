import "./Navbar.css";

function Navbar() {

  const handleScroll = (e, id) => {
    e.preventDefault(); 

    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Kartik Passricha</h2>

      <div className="nav-links">
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
        <a href="#achievements" onClick={(e) => handleScroll(e, "achievements")}>Achievements</a>
        <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;