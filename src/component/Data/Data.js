import React from 'react';

const Data = ({data}) => {
    const{name,picture,review,rating}=data;
    return (
      <div className=''> 
            <div class="max-w-sm  rounded overflow-hidden shadow-lg">
                <div className="flex px-4"> 
                 <img className="w-24 h-24 p-5 rounded-full" src={picture} alt="" />
                 <h3 className="py-8 font-bold">{name}</h3>
                </div>
                
  <div class="px-6">
     <p>Ratings:{rating}</p>
    <p class="text-gray-700 text-base"> {review}
    </p>
    </div>
        </div>
      </div>

    );
};

export default Data;