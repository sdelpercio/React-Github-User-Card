import React from 'react';
import Card from './Card';

const CardList = props => {
    return (
        <>
        {
            props.userData.map(user => (
                <Card key={user.id} userData={user} />
            ))
        }
        </>
    );
}
export default CardList;