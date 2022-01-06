import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLogo}>
        {/* <a href="#">WeinyM</a> */}
        <Link href="/">WeinyM</Link>
        {/* <Image src="/icon.png" width={75} height={75} /> */}
      </div>
      <div className={styles.navLinks}>
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
      </div>
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
