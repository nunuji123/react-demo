import { Outlet, Link } from "react-router-dom";

const navBarsArray = [
    {
        path: '/',
        content: 'Home'
    },
    {
        path: '/hook',
        content: 'hook'
    },
    {
        path: '/dom',
        content: 'dom'
    },
    {
        path: '/memo',
        content: 'memo'
    },
    {
        path: '/props',
        content: 'props'
    },
]

export default function Layout () {
    return (
        <div>
            <nav>
                <ul class="flex">
                    {
                        navBarsArray.map((navBar) => {
                            return <li class="mr-6">
                                <Link to={navBar.path}><a class="text-blue-500 hover:text-blue-800" href="#">{navBar.content}</a></Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
            <hr />
            <Outlet />
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