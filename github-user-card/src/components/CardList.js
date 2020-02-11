import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

const FollowerDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-evenly;
`

const CardList = ({followerData}) => {
    return (
        <>
            <h1>Followers</h1>
            <FollowerDiv>
            {
                followerData.map(follower => (
                    <FollowerCard key={follower.id} follower={follower} />
                ))
            }
            </FollowerDiv>
        </>
    );
}
export default CardList;