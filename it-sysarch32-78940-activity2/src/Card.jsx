import React from 'react';

const Card = ({ id, name, email, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} className="student-image"/>
            <div className="card-content">
                <p>{name}</p>
                <p> {email}</p>
            </div>
        </div>
    );
};

export default Card;