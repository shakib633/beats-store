import React from 'react';

const Home = () => {
    return (
        <div className="grid grid-cols-2 ">
            <div className="ml-8">
                <h3 className="text-3xl font-bold mb-2 mt-4">XPS 15 Laptop</h3>
                <p>Dell XPS 15 is a Windows 10 Professional laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i5 processor and it comes with 4GB of RAM. The Dell XPS 15 packs 256GB of SSD storage</p>

                <button className="border-orange-900">Live Demo</button>
          </div>
         
          <div className="ml-8 mt-8">
              <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=676&qlt=100,0&resMode=sharp2&size=676,402" alt="" />
          </div>
        </div>
    );
};

export default Home;