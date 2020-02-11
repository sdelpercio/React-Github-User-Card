import React from 'react';

const UserCard = ({userData}) => {
    return (
        <div>
            <h1>{userData.name}</h1>
            <img src={userData.avatar_url} alt={userData.name} />
            <h4>{userData.location}</h4>
            <p>{userData.bio}</p>
        </div>
    );
}
export default UserCard;