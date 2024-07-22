// src/actions/profileActions.js
export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    payload: profile,
});

export const updateName = (name) => ({
    type: 'UPDATE_NAME',
    payload: name,
});

export const updateEmail = (email) => ({
    type: 'UPDATE_EMAIL',
    payload: email,
});

export const updateSubscription = (subscribed) => ({
    type: 'UPDATE_SUBSCRIPTION',
    payload: subscribed,
});
