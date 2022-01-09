import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className={`half down ${styles.container}`}>
        <h2>Contact</h2>
        <ul className="contact-list">
          <li className="contact">
            <a
              href="mailto:weinymarchelina31@gmail.com?Subject=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Email</p>
              <p>weinymarchelina31@gmail.com</p>
            </a>
          </li>
          <li className="contact">
            <a
              href="https://github.com/weinymarchelina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
              <p>weinymarchelina</p>
            </a>
          </li>
          <li className="contact">
            <a
              href="https://devpost.com/weinymarchelina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Devpost</p>
              <p>weinymarchelina</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
