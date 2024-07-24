import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice';
import chatReducer from '../features/chat/chatSlice';
import usersReducer from '../features/chat/usersSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chat: chatReducer,
        users: usersReducer,
    },
});

export default store;
