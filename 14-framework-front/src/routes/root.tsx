import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/admin"}>admin</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}