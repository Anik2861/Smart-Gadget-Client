import React from 'react';
import './Review.css'


const Review = ({ studentReview }) => {
    return (
        <div>
            <div className='review-section shadow-sm'>
            <div className='student-info '>
                <img src={studentReview.picture} alt="" />
                <div className='review-main'>
                    <h4>{studentReview.name}</h4>
                    <h4 className='fs-6'>Ratings: ⭐⭐⭐⭐⭐</h4>
                    
                </div>
            </div>
            <p className='review'>{studentReview.reviews}</p>
        </div>
        </div>
    );
};

export default Review;