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
              Starting from web design, my passion for the web development
              industry motivates me to learn and code. With my abilities in
              building MERN applications, mainly using Next.js, I created
              exciting projects while providing solutions to different problems.
              <br />
              <br />
              My self-learning journey will continue by combining websites with
              augmented and virtual reality, bringing an extraordinary user
              experience. Besides working on projects, I am also pushing myself
              to compete in online hackathons.
            </p>
          </div>
          <div className="cta">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a
              href="https://devpost.com/weinymarchelina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devpost
            </a>
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
