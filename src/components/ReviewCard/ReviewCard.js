import React from 'react';


const ReviewCard = ({ review }) => {
    return (
        <div className='border-4 rounded w-72 h-32 '>
            <p> <span className=' font-bold '>Name:</span>  {review.name.slice(0, 9)} </p>
            <p> <span className=' font-bold' > Review:</span> {review.body.slice(0, 60)}</p>
            <p> <span className=' font-bold '>Ratings:</span> </p>
        </div>
    );
};

export default ReviewCard;