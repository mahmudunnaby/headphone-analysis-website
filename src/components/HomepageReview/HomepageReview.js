import React from 'react';
import useReviews from '../hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const HomepageReview = () => {
    const [reviews, setReviews] = useReviews([])
    const HomePagereviews = reviews.slice(0, 3)
    console.log(HomePagereviews);
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl '>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center gap-8 '>
                {
                    HomePagereviews.map(review => <ReviewCard key={review.id} review={review}  ></ReviewCard>)
                }

            </div>

        </div>
    );
};

export default HomepageReview;