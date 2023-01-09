import React from 'react';
import image from '../assets/banner/10798281_19362653.jpg'
import { motion as m } from 'framer-motion'
const banner = () => {
    return (
        <m.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: "0%" }} transition={{ duration: 0.75, ease: "easeOut" }} exit={{ opacity: 0 }} className='w-4/5 mx-auto flex lg:flex-row flex-col-reverse justify-center my-10 scroll-m-2 z-[-30] items-center sticky top-0'>
            <div className='lg:w-2/5 w-full'>
                <div className='overflow-hidden'>
                    <m.h1 initial={{ y:"-200%" }} animate={{ y: "-10%" }} transition={{ delay: 0.6, duration: 0.7 }} className='text-4xl my-5 font-semibold'>Ease of <span className='text-blue-600'>CalciteX</span></m.h1>
                </div>
                <p className='text-gray-700 text-md'>Vider is a technology-driven platform aimed to be the catalyst in embracing the ease of doing business, pursuing practice and compliance Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque beatae nobis repellendus qui vero similique architecto voluptates quia eligendi, esse deserunt vitae laborum placeat, nemo corporis eveniet facere nostrum nulla!</p>
            </div>
            <div className='lg:w-3/5 w-full'>
                <img src={image} alt="" />
            </div>
        </m.div>
    );
};

export default banner;