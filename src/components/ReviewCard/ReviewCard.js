import React from 'react';


const ReviewCard = ({ review }) => {
    console.log(review.picture);
    return (
        <div className='border-4 rounded w-72 h-26 p-10 '>
            <img src={review.picture} alt="" />
            <p> <span className=' font-bold '>Name:</span>  {review.name.slice(0, 9)} </p>
            <p> <span className=' font-bold' > Review:</span> {review.body.slice(0, 60)}</p>
            <p> <span className=' font-bold '>Ratings:</span>{review.ratings} </p>
        </div>
    );
};

export default ReviewCard;