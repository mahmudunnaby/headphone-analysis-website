import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {

    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 20)))
    }, [])

    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl '>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 '>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}  ></ReviewCard>)
                }

            </div>

        </div>
    );
};

export default Review;