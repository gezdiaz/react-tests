import { Link, Outlet } from "react-router-dom";

const Root = (): JSX.Element => {
  return (
    <>
      <div>Hello world!</div>
      <p>Navigation goes here</p>
      <nav>
        <ul>
          <li>
            <Link to={"/calculator"}>Calculator</Link>
          </li>
          <li>
            <Link to={"/default-app"}>Default App</Link>
          </li>
        </ul>
      </nav>
      <div id="page">
        <h2>Here goes the page</h2>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
