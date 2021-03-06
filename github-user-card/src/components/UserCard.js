import React from 'react';
import styled from 'styled-components';

const StyledUserCard = styled.div`
    width: 300px;
    padding: 0 20px 20px 20px;
    margin: 4% auto 10% auto;
    border: 1px solid black;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: linear-gradient( 178deg,  rgba(201,234,252,0.51) 14.9%, rgba(139,192,216,0.73) 80% );
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
const StyledImage = styled.img`
    width: 200px;
    height: auto;
`

const UserCard = ({userData}) => {
    return (
        <StyledUserCard>
            <h1>{userData.name}</h1>
            <StyledImage src={userData.avatar_url} alt={userData.name} />
            <h4>{userData.location}</h4>
            <p>{userData.bio}</p>
        </StyledUserCard>
    );
}
export default UserCard;