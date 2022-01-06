import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <footer>
        <p>© 2021 WEINY MARCHELINA</p>
      </footer>
    </div>
  );
};

export default Layout;
