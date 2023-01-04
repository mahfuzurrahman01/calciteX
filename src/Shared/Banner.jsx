import React from 'react';
import image from '../assets/banner/10798281_19362653.jpg'
const banner = () => {
    return (
        <div className='w-4/5 mx-auto flex lg:flex-row flex-col-reverse justify-center my-10 scroll-m-2 z-[-30] items-center sticky top-0'>
            <div className='lg:w-2/5 w-full'>
               <h1 className='text-4xl my-5 font-semibold '>Ease of <span className='text-blue-600'>CalciteX</span></h1>
               <p className='text-gray-700 text-md'>Vider is a technology-driven platform aimed to be the catalyst in embracing the ease of doing business, pursuing practice and compliance Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque beatae nobis repellendus qui vero similique architecto voluptates quia eligendi, esse deserunt vitae laborum placeat, nemo corporis eveniet facere nostrum nulla!</p>
            </div>
            <div className='lg:w-3/5 w-full'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default banner;