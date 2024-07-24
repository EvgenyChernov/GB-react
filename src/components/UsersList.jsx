import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/chat/usersSlice';

const UsersList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && (
                <div>
                    <p>Error: {error}</p>
                    <button onClick={() => dispatch(fetchUsers())}>Retry</button>
                </div>
            )}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
