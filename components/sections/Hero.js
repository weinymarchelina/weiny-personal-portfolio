import Image from "next/image";
import styles from "../../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className={`container ${styles.container}`}>
        <div className={styles.one}>
          <div className={styles.headline}>
            <h1>Fullstack Web Developer</h1>
            <p className={styles.name}>Weiny Marchelina</p>
            <p className={styles.info}>
              Designing and creating various types of websites. Always exploring
              and innovating new things every day.
            </p>
          </div>
          <div className={styles.cta}>
            <button className="projects">
              <a href="#projects">View Projects</a>
            </button>
            <button className="about">
              <a href="#about">About Me</a>
            </button>
          </div>
        </div>
        <div className={styles.two}>
          <img
            src="https://res.cloudinary.com/tigervision/image/upload/v1641480386/portfolio/personal/About_e0rmcl.jpg"
            alt="hero-image"
          />
          {/* <Image
            src="https://res.cloudinary.com/tigervision/image/upload/v1641480386/portfolio/personal/About_e0rmcl.jpg"
            alt="hero-image"
            layout="fill"
            objectFit="cover"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
