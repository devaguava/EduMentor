import React from 'react';
import './MentorCard.css';

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <img src={mentor.imageUrl} alt={mentor.name} />
      <div className="mentor-info">
        <h3>{mentor.name}</h3>
        <p>{mentor.course}</p>
        <p>{mentor.price}</p>
        <p>Rating: {mentor.rating}</p>
      </div>
    </div>
  );
};

export default MentorCard;
