import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLogo}>
        <Link href="/">WeinyM</Link>
      </div>

      <button
        className={`${styles.mobile} ${open ? styles.cross : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.show : ""}`}>
        <li>
          <Link href="/#hero">Home</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#skills">Skills</Link>
        </li>
        {/* <li>
          <Link href="/#faq">FAQ</Link>
        </li> */}
        <li>
          <Link href="/#achievements">Achievements</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>

      {/* <div className="nav-option">
        <a href="#">Language</a>
      </div> */}
    </nav>
  );
};

export default Navbar;

{
  /* <div className="nav-links">
<li>
  <a href="#hero">Home</a>
</li>
<li>
  <a href="#projects">Projects</a>
</li>
<li>
  <a href="#about">About Me</a>
</li>
<li>
  <a href="#skills">Skills</a>
</li>
<li>
  <a href="#faq">FAQ</a>
</li>
<li>
  <a href="#achievements">Achievements</a>
</li>
<li>
  <a href="#contact">Contact</a>
</li>
</div> */
}
