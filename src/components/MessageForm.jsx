import { useState } from "react";  // Импорт хука useState из React

function MessageForm({ onSubmit }) {
    // Определение состояния для текста сообщения
    const [text, setText] = useState('');
    // Определение состояния для автора сообщения
    const [author, setAuthor] = useState('');

    // Функция для обработки отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();  // Предотвращаем перезагрузку страницы при отправке формы
        if (text.trim() !== '' && author.trim() !== '') {
            // Вызываем функцию onSubmit из пропсов, передавая текст и автора сообщения
            onSubmit(text, author);
            // Очищаем поля ввода после отправки сообщения
            setText('');
            setAuthor('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Введите сообщение"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input input-bordered w-full"
            />
            <input
                type="text"
                placeholder="Ваше имя"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="input input-bordered image-full"
            />
            <button type="submit" className="btn btn-primary">
                Отправить
            </button>
        </form>
    );
}

export default MessageForm;  // Экспорт компонента MessageForm по умолчанию