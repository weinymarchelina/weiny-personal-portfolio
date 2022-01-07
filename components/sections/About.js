import styles from "../../styles/About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className={`container inner ${styles.container}`}>
        <div className={styles.one}>
          <div className={styles.text}>
            <h2>About Me</h2>
            <p>
              Starting from web design, my passion the web development industry
              motivates me to continuously learn and explore. My self-learning
              journey will continue combining websites with augmented reality,
              bringing an extraordinary experience.
              <br />
              <br />
              Other than working on personal projects, I am also pushing myself
              to competing online hackathons.
              {/* Feel free to check out and contact me
              in Devpost. */}
            </p>
          </div>
          <div className="cta">
            <a href="#">Resume</a>
            <a href="https://devpost.com/weinymarchelina">Devpost</a>
          </div>
        </div>
        <div className={styles.two}>
          <img
            src="https://res.cloudinary.com/tigervision/image/upload/v1641480385/portfolio/personal/Landing_zk667g.jpg"
            alt="about-image"
          />
          {/* <Image
            src="https://res.cloudinary.com/tigervision/image/upload/v1641480385/portfolio/personal/Landing_zk667g.jpg"
            alt="hero-image"
            layout="fill"
            objectFit="cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
