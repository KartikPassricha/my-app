import "./Contacts.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <h2>Contact</h2>

        <p>
          I am always open to discussing new opportunities, collaborations,
          or interesting projects. Feel free to reach out to me through the
          platforms below.
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:kartikpassricha1312@gmail.com">
            kartikpassricha1312@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/KartikPassricha"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/KartikPassricha
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/kartik-passricha-97b200293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/kartik-passricha-97b200293/
          </a>
        </p>
        
        <p>
          <strong>Resume:</strong>{" "}
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
          View Resume (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;