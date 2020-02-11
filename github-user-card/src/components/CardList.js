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
const StyledHeadline = styled.h2`
  margin: 4% auto;
  width: 80%;
  text-align: center;
`

const CardList = ({followerData}) => {
    return (
        <>
            <StyledHeadline>Followers</StyledHeadline>
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