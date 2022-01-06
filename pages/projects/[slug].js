import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Skeleton from "../../components/Skeleton";
import Styles from "../../styles/Details.module.scss";

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  space: process.env.CONTENTFUL_SPACE_ID,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "project",
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const selected = items.filter((item) => {
    return item.fields.slug === params.slug;
  });

  return {
    props: {
      project: selected[0],
      allProjects: items,
    },
    // revalidate: 1
  };
};

const Projects = ({ project, allProjects }) => {
  if (!project && !allProjects) {
    return <Skeleton />;
  }

  const details = project.fields;

  allProjects.sort((a, b) =>
    a.fields.order > b.fields.order
      ? 1
      : b.fields.order > a.fields.order
      ? -1
      : 0
  );

  let index = 0;
  allProjects.filter((eachProject) => {
    if (eachProject.fields.slug === details.slug) {
      index = allProjects.indexOf(eachProject);
    }
  });
  const getIndex = (num) => {
    let next = index + num;
    if (next > allProjects.length - 1) {
      const result = next - allProjects.length;
      next = result;
    }

    return next;
  };
  const nextProject = allProjects[getIndex(1)];
  const nextProject2 = allProjects[getIndex(2)];

  const date = new Date(details.date);
  console.log(date);

  return (
    <section>
      <div className={`container inner ${Styles.container}`}>
        <div className={Styles.one}>
          {/* <h1>Project Details</h1> */}
          <div className={Styles.headline}>
            <h2>{details.title}</h2>
            <p>{details.subtitle}</p>
          </div>
          <div className={Styles.cta}>
            <p>{`${date.getFullYear()}/${
              date.getMonth() + 1
            }/${date.getDate()}`}</p>
            <div>
              <a href={details.repo}>Repository</a>
              <a href={details.live}>Visit Website</a>
            </div>
          </div>
        </div>

        <div className={Styles.two}>
          <div className={Styles.info}>
            <div className={Styles.tech}>
              <h3>Technology</h3>
              <ul>
                {details.tech.map((tech) => {
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
              </ul>
            </div>
            <div className={Styles.category}>
              <h3>Category</h3>
              <ul>
                {details.category.map((item) => {
                  return (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={Styles.content}>
            {details.videoLink && (
              <video
                src={`${details.videoLink}`}
                alt={`${details.title} Video Display`}
              />
            )}

            {!details.videoLink && (
              <img
                src={`${details.thumbnailLink}`}
                alt={`${details.title} Image Display`}
              />
            )}
          </div>
        </div>

        <div className={Styles.desc}>
          <h3 className={Styles.header}>Description</h3>
          <div>
            <ReactMarkdown>{details.desc}</ReactMarkdown>
          </div>
        </div>

        <div className={Styles.sample}>
          {details.sampleLinks &&
            details.sampleLinks.map((link) => {
              return (
                <img
                  key={link}
                  src={`${link}`}
                  alt={`${details.title} Image Sample`}
                />
              );
            })}
        </div>

        <div className={Styles.other}>
          <h3>Other Projects</h3>
          <div className={Styles.project}>
            <ul>
              <li>
                <div className={Styles.containImg}>
                  <img
                    src={`${nextProject.fields.thumbnailLink}`}
                    alt={`${nextProject.fields.title} Image Sample`}
                  />
                  <button>
                    <Link href={`/projects/${nextProject.fields.slug}`}>
                      Explore
                    </Link>
                  </button>
                </div>
                <div className={Styles.containInfo}>
                  <p>{nextProject.fields.title}</p>
                  <p>
                    Aenean luctus, lacus a eleifend mollis, nisl quam porta ex,
                    nec elementum arcu lectus aliquam metus.
                  </p>
                </div>
              </li>
              <li>
                <div className={Styles.containImg}>
                  <img
                    src={`${nextProject2.fields.thumbnailLink}`}
                    alt={`${nextProject2.fields.title} Image Sample`}
                  />
                  <button>
                    <Link href={`/projects/${nextProject2.fields.slug}`}>
                      Explore
                    </Link>
                  </button>
                </div>
                <div className={Styles.containInfo}>
                  <p>{nextProject2.fields.title}</p>
                  <p>
                    Aenean luctus, lacus a eleifend mollis, nisl quam porta ex,
                    nec elementum arcu lectus aliquam metus.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
