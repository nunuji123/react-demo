import { Outlet, Link } from "react-router-dom";

export default function Layout () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hook">hook</Link>
                    </li>
                    <li>
                        <Link to="/dom">dom</Link>
                    </li>
                    <li>
                        <Link to="/memo">memo</Link>
                    </li>
                    <li>
                        <Link to="/props">props</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}