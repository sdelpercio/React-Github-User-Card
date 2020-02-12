import React from 'react';
import styled from 'styled-components';

const StyledUserCard = styled.div`
    width: 300px;
    padding: 0 20px 20px 20px;
    margin: 4% auto;
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

const FollowerCard = ({follower}) => {
    return (
        <StyledUserCard>
            <h1>{follower.login}</h1>
            <StyledImage src={follower.avatar_url} alt={follower.login} />
        </StyledUserCard>
    );
}
export default FollowerCard;