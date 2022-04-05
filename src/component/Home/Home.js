import React from 'react';
import { Link } from 'react-router-dom';
import useReviewData from '../../hooks/useReviewData';
import Data from '../Data/Data';
const Home = () => {
    const[review]=useReviewData([])
    const sliceReview=review.slice(0,3);
    return (
       <div> 
            <div className="grid grid-cols-2 mt-12 gap-8">
            <div className="ml-4">
                <h3 className="text-4xl  font-bold">New Dell xps Laptop</h3>
                <h3 className="text-2xl font-semibold text-blue-300">For Creators & Creativity Starting at $849.99</h3>
                <p> 
                XPS laptops are precision crafted with premium materials, featuring stunning displays and the performance you demand to express your creative self and your big ideas.Get into your  precision-crafted laptops featuring the performance you demand to power your passions.  </p>
                <p className="mt-8">  <Link className="bg-amber-500 p-3 rounded-md mt-8 font-bold text-white " to="/*"> Live Demo</Link></p>
               
            </div>
            <div> 
         <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=676&qlt=100,0&resMode=sharp2&size=676,402" alt=""></img>
            </div>
            </div>
            <div className=" mt-8 "> 
                <h2 className="mb-4 text-center text-emerald-500  font-bold"> Product Review :{sliceReview.length}</h2>
                <div className='md:grid grid-cols-3 gap-8'> 
                    {
                        sliceReview.map(data=><Data key={sliceReview.id} data={data}></Data>)
                    }
                </div>
                <p className="mt-4"><Link className="bg-amber-500 p-3 text-white rounded-md mt-8 font-bold " to="/Reviews"> See More</Link></p>
             </div>
       </div>
    );
};

export default Home;