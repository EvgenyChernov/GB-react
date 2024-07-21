import './App.css';  // Импорт файла стилей
import { useEffect, useState } from "react";  // Импорт хуков useEffect и useState из React
import MessageForm from "./components/MessageForm";  // Импорт компонента MessageForm

function App() {
    // Определение состояния для списка сообщений
    const [messageList, setMessageList] = useState([]);
    // Определение состояния для последнего сообщения
    const [lastMessage, setLastMessage] = useState(null);

    // useEffect выполняется каждый раз, когда изменяется lastMessage
    useEffect(() => {
        // Если последнее сообщение не от робота
        if (lastMessage && lastMessage.author !== "Robot") {
            // Устанавливаем таймер на 1 секунду
            const timer = setTimeout(() => {
                // Создаем новое сообщение от робота
                const robotMessage = {
                    text: "Человек, я получил твое сообщение",
                    author: "Robot",
                };
                // Обновляем список сообщений, добавляя сообщение от робота
                setMessageList((prevMessageList) => [...prevMessageList, robotMessage]);
            }, 1000);

            // Очищаем таймер при размонтировании компонента или изменении зависимости
            return () => clearTimeout(timer);
        }
    }, [lastMessage]);  // Зависимость - lastMessage

    // Функция для обработки отправки сообщения
    const handleMessageSubmit = (text, author) => {
        // Создаем новое сообщение
        const newMessage = {
            text: text,
            author: author,
        };

        // Обновляем список сообщений, добавляя новое сообщение
        setMessageList([...messageList, newMessage]);
        // Обновляем последнее сообщение
        setLastMessage(newMessage);
    };

    return (
        <div className="App container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Список сообщений</h1>
            {/* Передаем функцию handleMessageSubmit как пропс onSubmit в компонент MessageForm */}
            <MessageForm onSubmit={handleMessageSubmit} />

            <div className="messageList mt-4">
                {/* Отображаем список сообщений */}
                {messageList.map((message, index) => (
                    <div key={index} className="message p-4 mb-2 bordered rounded-lg shadow-sm bg-gray-50">
                        <strong className="font-semibold">{message.author}: </strong>
                        <span> {message.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;  // Экспорт компонента App по умолчанию
