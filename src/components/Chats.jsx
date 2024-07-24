// Chats.js
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addChat, deleteChat, robotResponse } from '../features/chat/chatSlice';
import MessageForm from "./MessageForm";

function Chats({ handleThemeChange }) {
    const { chatId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chat.chats);
    const messages = useSelector(state => state.chat.messages);
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        const chat = chats.find(c => c.id === chatId);
        if (!chat && chatId) {
            navigate('/chats');
        } else {
            setSelectedChat(chat);
        }
    }, [chatId, chats, navigate]);

    const handleMessageSubmit = (text, author) => {
        dispatch(addMessage({ chatId, text, author }));
        dispatch(robotResponse(chatId));
    };

    const handleAddChat = () => {
        const newChatId = (chats.length + 1).toString();
        const newChatName = prompt("Введите название нового чата");
        if (newChatName) {
            dispatch(addChat({ id: newChatId, name: newChatName }));
            navigate(`/chats/${newChatId}`);
        }
    };

    const handleDeleteChat = (id) => {
        if (window.confirm("Вы уверены, что хотите удалить этот чат?")) {
            dispatch(deleteChat(id));
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
                    onClick={handleAddChat}
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
                                onClick={() => handleDeleteChat(chat.id)}
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
