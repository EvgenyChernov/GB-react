import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Добро пожаловать!</h1>
            <ul className="list-disc pl-5">
                <li className="mb-2">
                    <Link to="/chats" className="text-blue-500">Страница чатов</Link>
                </li>
                <li>
                    <Link to="/profile" className="text-blue-500">Страница профиля</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
