import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { createClient } from "contentful";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import FAQ from "../components/sections/FAQ";
import Achievement from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";

export const getStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const res = await client.getEntries();

  return {
    props: {
      projects: res.items.filter((items) => {
        return items.sys.contentType.sys.id === "project";
      }),
      skills: res.items.filter((items) => {
        return items.sys.contentType.sys.id === "skill";
      }),
    },
  };
};

export default function Home({ projects, skills }) {
  projects.sort((a, b) =>
    a.fields.order > b.fields.order
      ? 1
      : b.fields.order > a.fields.order
      ? -1
      : 0
  );

  skills.sort((a, b) =>
    a.fields.order > b.fields.order
      ? 1
      : b.fields.order > a.fields.order
      ? -1
      : 0
  );

  return (
    <div>
      <Head>
        <title>Weiny - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Weiny Marchelina"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Hero />

        <section id="projects">
          {/* {projects && (
            <div className={styles.bar}>
              {projects.map((project) => (
                <button key={project.sys.id}>
                  <a href={`#${project.fields.slug}`}>Box</a>
                </button>
              ))}
            </div>
          )} */}
          <div className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>Projects</h2>

            {projects &&
              projects.map((project) => (
                <div
                  key={project.sys.id}
                  id={`${project.fields.slug}`}
                  className={styles.pages}
                >
                  <div className={styles.setContainer}>
                    <div className={styles.one}>
                      <div className={styles.headline}>
                        <h3>{project.fields.title}</h3>
                        <p>{project.fields.subtitle}</p>
                        <div className={styles.cta}>
                          <Link href={`/projects/${project.fields.slug}`}>
                            Explore
                          </Link>
                          {project.fields.live && (
                            <a
                              href={project.fields.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </a>
                          )}
                        </div>
                      </div>

                      <div className={styles.tech}>
                        {project.fields.tech.map((tech) => {
                          return (
                            <li key={tech}>
                              <img
                                src={`/svg/${tech.toLowerCase()}.svg`}
                                alt={`${tech}-logo`}
                              />
                              <p>{tech}</p>
                            </li>
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.two}>
                      <img
                        src={project.fields.thumbnailLink}
                        alt={`${project.fields.title} thumbnail`}
                      />
                    </div>
                  </div>
                </div>
              ))}

            <div className={styles.more}>
              <a
                href="https://devpost.com/weinymarchelina"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More Projects
              </a>
            </div>
          </div>
        </section>

        <About />

        <section id="skills">
          <div className={`container inner ${styles.skillContainer}`}>
            <h2>Skills</h2>
            <div className={styles.show}>
              <div className={styles.category}>
                <h3>Languages</h3>
                <ul className="front">
                  {skills.map((skill) => {
                    // if (skill.fields.category === "Front") {
                    //   return (
                    //     <li key={skill.fields.name}>
                    //       <img
                    //         src={`/svg/${skill.fields.name.toLowerCase()}.svg`}
                    //         alt={`${skill.fields.title} logo`}
                    //       />

                    //       <p>{skill.fields.name}</p>
                    //     </li>
                    //   );
                    // }
                    if (skill.fields.type === "Language") {
                      return (
                        <li key={skill.fields.name}>
                          <img
                            src={`/svg/${skill.fields.name.toLowerCase()}.svg`}
                            alt={`${skill.fields.title} logo`}
                          />

                          <p>{skill.fields.name}</p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div className={styles.category}>
                <h3>Technologies</h3>
                <ul className="back">
                  {skills.map((skill) => {
                    // if (skill.fields.category === "Back") {
                    //   return (
                    //     <li key={skill.fields.name}>
                    //       <img
                    //         src={`/svg/${skill.fields.name.toLowerCase()}.svg`}
                    //         alt={`${skill.fields.title} logo`}
                    //       />

                    //       <p>{skill.fields.name}</p>
                    //     </li>
                    //   );
                    // }
                    if (skill.fields.type === "Technology") {
                      return (
                        <li key={skill.fields.name}>
                          <img
                            src={`/svg/${skill.fields.name.toLowerCase()}.svg`}
                            alt={`${skill.fields.title} logo`}
                          />

                          <p>{skill.fields.name}</p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div className={styles.category}>
                <h3>Others</h3>
                <ul className="other">
                  {skills.map((skill) => {
                    if (skill.fields.category === "Other") {
                      return (
                        <li key={skill.fields.name}>
                          <img
                            src={`/svg/${skill.fields.name.toLowerCase()}.svg`}
                            alt={`${skill.fields.title} logo`}
                          />

                          <p>{skill.fields.name}</p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <FAQ /> */}

        <section>
          <div className="double">
            <Achievement />
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
