// src/reducers/profileReducer.js
const initialState = {
    name: '',
    email: '',
    subscribed: false, // Добавлено новое поле состояния
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
            };
        case 'UPDATE_NAME':
            return {
                ...state,
                name: action.payload,
            };
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        case 'UPDATE_SUBSCRIPTION':
            return {
                ...state,
                subscribed: action.payload,
            };
        default:
            return state;
    }
};

export default profileReducer;
