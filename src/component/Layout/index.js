import { Outlet, Link } from "react-router-dom";

const navBarsArray = [
  {
    path: "/",
    content: "Home",
  },
  {
    path: "/hook",
    content: "hook",
  },
  {
    path: "/dom",
    content: "dom",
  },
  {
    path: "/memo",
    content: "memo",
  },
  {
    path: "/props",
    content: "props",
  },
  {
    path: "/customize-hooks/useDebounce",
    content: "customize-hooks",
  },
  {
    path: "/refs",
    content: "refs",
  },
  {
    path: "/hoc",
    content: "hoc",
  },
];

export default function Layout() {
  return (
    <div>
      <nav>
        <ul className="flex">
          {navBarsArray.map((navBar) => {
            return (
              <li className="mr-6" key={navBar.path}>
                <Link to={navBar.path} className="text-blue-500 hover:text-blue-800">
                  {navBar.content}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
