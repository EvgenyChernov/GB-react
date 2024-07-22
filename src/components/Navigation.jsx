import { Link } from 'react-router-dom';

function Navigation({ handleThemeChange }) {
    return (
        <nav className="nav-container flex flex-col justify-between h-full bg-base-200 text-base-content p-4">
            <div>
                <h2 className="text-xl font-bold mb-4">Навигация</h2>
                <ul className="list-none">
                    <li className="mb-2">
                        <Link to="/" className="text-primary">Домашняя страница</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/chats" className="text-primary">Чаты</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/profile" className="text-primary">Профиль</Link>
                    </li>
                </ul>
            </div>
            <button onClick={handleThemeChange} className="btn btn-primary mt-4">
                Изменить тему
            </button>
        </nav>
    );
}

export default Navigation;
