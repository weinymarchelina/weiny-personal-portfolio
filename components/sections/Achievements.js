import styles from "../../styles/Achievement.module.scss";

const Achievement = () => {
  return (
    <div id="achievements">
      <div className={`half up ${styles.container}`}>
        <h2>Achievements</h2>
        <ul className="display">
          <li className="display-card">
            <a
              href="https://drive.google.com/file/d/1PVjd-U8Mr-4jxQpAULLX0I4AW4qoD9tq/view?usp=sharing"
              target="blank"
            >
              Awards
            </a>
          </li>
          <li className="display-card">
            <a
              href="https://drive.google.com/file/d/1WEWkeadFjd4p8gc-2Bajqyrajl_4bq4X/view?usp=sharing"
              target="blank"
            >
              Language Proficiency
            </a>
          </li>
          <li className="display-card">
            <a
              href="https://drive.google.com/file/d/1FN6Txl25F8D3OS6LvlFjub-E2MAQOjKo/view?usp=sharing"
              target="blank"
            >
              Events
            </a>
          </li>
          <li className="display-card">
            <a
              href="https://drive.google.com/file/d/1BOEvkQNhPgnGAl66BR6Otg4kKoUh68Z8/view?usp=sharing"
              target="blank"
            >
              Art & Literature Works
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
