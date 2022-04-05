import React from 'react';

const ReviewData = ({reviewData}) => {
    const{name,picture,review,rating}=reviewData;
    return (
        <div className="ml-12 mr-2 px-6 rounded overflow-hidden shadow-lg">
        <div className="flex items-center"> 
        <img className="w-20 h-20  ml-2 rounded-full " src={picture} alt=""></img>
        <h3 className="ml-4 font-bold">{name}</h3>
        </div>
         <p className="mt-4">Ratings: {rating}</p>
         <p>{review}</p>
            
        </div>
    );
};

export default ReviewData;