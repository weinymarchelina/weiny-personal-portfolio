import Navbar from "./Navbar";
import Cursor from "./Cursor";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {/* <Cursor /> */}
      {children}
      <footer>
        <p>© 2021 WEINY MARCHELINA</p>
      </footer>
    </div>
  );
};

export default Layout;
