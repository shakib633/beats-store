import React from 'react';
import useReviewData from '../../hooks/useReviewData';
import ReviewData from '../ReviewData/ReviewData';

const Reviews = () => {
    const[review]=useReviewData([])
    return (
        <div className="mt-12">
            <h2 className="text-3xl mb-8 font-bold text-grey-500">All Reviews : {review.length} </h2>
            <div className="md:grid grid-cols-3 gap-8">
                {
                   review.map(reviewData=><ReviewData key={reviewData.id} reviewData={reviewData}></ReviewData>) 
                }
            </div>
        </div>
    );
};

export default Reviews;