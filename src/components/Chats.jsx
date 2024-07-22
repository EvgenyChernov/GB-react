import { useEffect, useState } from "react";
import MessageForm from "./MessageForm";
import { useNavigate, useParams, Link } from "react-router-dom";

function Chats({ handleThemeChange }) {
    const { chatId } = useParams();
    const navigate = useNavigate();
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState({});
    const [chats, setChats] = useState([
        { id: '1', name: 'Chat 1' },
        { id: '2', name: 'Chat 2' },
        { id: '3', name: 'Chat 3' },
    ]);

    useEffect(() => {
        const chat = chats.find(c => c.id === chatId);
        if (!chat && chatId) {
            navigate('/chats');
        } else {
            setSelectedChat(chat);
        }
    }, [chatId, chats, navigate]);

    useEffect(() => {
        // Загружаем сообщения из Local Storage
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || {};
        setMessages(savedMessages);
    }, []);

    useEffect(() => {
        // Сохраняем сообщения в Local Storage при изменении состояния messages
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        if (selectedChat) {
            if (!messages[chatId]) {
                setMessages(prevMessages => ({ ...prevMessages, [chatId]: [] }));
            }
        }
    }, [selectedChat, chatId, messages]);

    const handleMessageSubmit = (text, author) => {
        const newMessage = {
            text: text,
            author: author,
        };

        // Обновляем состояние сообщений для текущего chatId
        setMessages(prevMessages => ({
            ...prevMessages,
            [chatId]: [...(prevMessages[chatId] || []), newMessage]
        }));

        // Отправляем сообщение робота через секунду
        setTimeout(() => {
            const robotMessage = {
                text: "Человек, я получил твое сообщение",
                author: "Robot",
            };
            setMessages(prevMessages => ({
                ...prevMessages,
                [chatId]: [...(prevMessages[chatId] || []), robotMessage]
            }));
        }, 1000);
    };

    const addChat = () => {
        const newChatId = (chats.length + 1).toString();
        const newChatName = prompt("Введите название нового чата");
        if (newChatName) {
            setChats(prevChats => [
                ...prevChats,
                { id: newChatId, name: newChatName }
            ]);
            // Перенаправляем на новый чат
            navigate(`/chats/${newChatId}`);
        }
    };

    const deleteChat = (id) => {
        if (window.confirm("Вы уверены, что хотите удалить этот чат?")) {
            setChats(prevChats => prevChats.filter(chat => chat.id !== id));
            // Удаляем сообщения, связанные с этим чатом
            setMessages(prevMessages => {
                const newMessages = { ...prevMessages };
                delete newMessages[id];
                return newMessages;
            });
            // Если удаляем текущий чат, перенаправляем на первый чат или список чатов
            if (chatId === id) {
                navigate('/chats');
            }
        }
    };

    return (
        <div className="chats-container flex h-screen">
            <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Чаты</h2>
                <button
                    onClick={addChat}
                    className="btn btn-primary mb-4"
                >
                    Добавить чат
                </button>
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id}
                            className={`p-2 mb-2 rounded-lg bg-white shadow-sm ${chat.id === chatId ? 'bg-blue-100' : ''}`}>
                            <Link to={`/chats/${chat.id}`} className="text-blue-600 hover:underline">
                                {chat.name}
                            </Link>
                            <button
                                onClick={() => deleteChat(chat.id)}
                                className="btn btn-danger ml-4"
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <button
                        onClick={handleThemeChange}
                        className="btn btn-primary mt-4"
                    >
                        Изменить тему
                    </button>
                </div>
            </div>

            <div className="w-3/4 p-4 flex flex-col">
                {selectedChat ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Chat: {selectedChat.name}</h2>
                        <MessageForm onSubmit={handleMessageSubmit} />
                        <div className="messageList mt-4 flex-grow overflow-y-auto">
                            {messages[chatId] && messages[chatId].map((message, index) => (
                                <div key={index} className="message p-4 mb-2 rounded-lg shadow-sm bg-gray-50">
                                    <strong className="font-semibold">{message.author}: </strong>
                                    <span>{message.text}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500">Выберите чат для просмотра сообщений.</p>
                )}
            </div>
        </div>
    );
}

export default Chats;
