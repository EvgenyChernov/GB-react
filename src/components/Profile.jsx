import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheckbox } from '../features/profile/profileSlice';

const Profile = () => {
    const isChecked = useSelector((state) => state.profile.isChecked);
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(toggleCheckbox());
    };

    return (
        <div className="profile-container p-4">
            <h2 className="text-2xl font-bold mb-4">Профиль</h2>
            <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                />
                Сохранить состояние
            </label>
        </div>
    );
};

export default Profile;
