import Header from "./Header";
import SideBar from "./SideBar";

const Layout =
  (Component) =>
  ({ ...props }) =>
    (
      <div className="layout">
        <Header />
        <div className="container">
          <SideBar />
          <div className="main-container">
            <Component {...props} />
          </div>
        </div>
      </div>
    );

export default Layout;
