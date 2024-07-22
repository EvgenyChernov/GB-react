import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chats from './components/Chats';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';

function App() {
    const [theme, setTheme] = useState('cupcake');

    const themes = [
        'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk',
        'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
        'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid',
        'lemonade', 'night', 'coffee', 'winter'
    ];

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleThemeChange = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <Router>
            <div className="App grid grid-cols-[15rem_1fr] min-h-screen">
                <Navigation handleThemeChange={handleThemeChange} />
                <div className="content-container bg-base-100 text-base-content p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/chats" element={<Chats />} />
                        <Route path="/chats/:chatId" element={<Chats handleMessageSubmit={() => {}} messageList={[]} />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
