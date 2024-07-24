import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice';
import chatReducer from '../features/chat/chatSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chat: chatReducer,
    },
});

export default store;
