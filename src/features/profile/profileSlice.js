import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isChecked: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        toggleCheckbox: (state) => {
            state.isChecked = !state.isChecked;
        },
    },
});

export const { toggleCheckbox } = profileSlice.actions;
export default profileSlice.reducer;
