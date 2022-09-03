import { Link } from "react-router-dom";

const NavBar = ({ routes = [] }) => {
  return (
    <nav className="navbar navbar-dark bg-dark p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HBT
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          {routes.map(({ title, path }) => (
            <li key={path} className="nav-item">
              <Link to={path} className="nav-link" children={title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
