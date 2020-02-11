import React from 'react';

const Card = props => {
    return (
        <div>
            <h1>{props.userData.name}</h1>
            <img src={props.userData.avatar_url} alt={`${props.userData.name}'s Github avatar`} />
            <h4>{props.userData.location}</h4>
            <p>{props.userData.bio}</p>
        </div>
    );
}
export default Card;