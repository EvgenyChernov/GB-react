import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail, updateSubscription } from '../actions/profileActions';


function Profile(){
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    const handleNameChange = (e) => {
        dispatch(updateName(e.target.value));
    };

    const handleEmailChange = (e) => {
        dispatch(updateEmail(e.target.value));
    };

    const handleSubscriptionChange = (e) => {
        dispatch(updateSubscription(e.target.checked));
    };

    return (
        <div className="profile-container p-4">
            <h2 className="text-2xl font-bold mb-4">Профиль</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Имя</label>
                <input
                    type="text"
                    value={profile.name}
                    onChange={handleNameChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={profile.email}
                    onChange={handleEmailChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    <input
                        type="checkbox"
                        checked={profile.subscribed}
                        onChange={handleSubscriptionChange}
                        className="mr-2"
                    />
                    Подписаться на новости
                </label>
            </div>
        </div>
    );
}
export default Profile