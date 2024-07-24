// chatSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const robotResponse = createAsyncThunk(
    'messages/robotResponse',
    async (chatId, { dispatch }) => {
        setTimeout(() => {
            dispatch(addMessage({
                chatId,
                text: "Человек, я получил твое сообщение",
                author: "Robot",
            }));
        }, 1000);
    }
);

const chatSlice = createSlice({
    name: 'chats',
    initialState: {
        chats: [
            { id: '1', name: 'Chat 1' },
            { id: '2', name: 'Chat 2' },
            { id: '3', name: 'Chat 3' },
        ],
        messages: {},
    },
    reducers: {
        addMessage: (state, action) => {
            const { chatId, text, author } = action.payload;
            if (!state.messages[chatId]) {
                state.messages[chatId] = [];
            }
            state.messages[chatId].push({ text, author });
        },
        addChat: (state, action) => {
            const { id, name } = action.payload;
            state.chats.push({ id, name });
        },
        deleteChat: (state, action) => {
            const id = action.payload;
            state.chats = state.chats.filter(chat => chat.id !== id);
            delete state.messages[id];
        },
    },
});

export const { addMessage, addChat, deleteChat } = chatSlice.actions;

export default chatSlice.reducer;
