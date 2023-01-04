import React from 'react';

const Products = () => {
    return (
        <div className='bg-gray-100 lg:pt-32 md:pt-20 pt-5 lg:px-10 md:px-5 px-2 '>
            <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold text-center gradient lg:mb-20 md:mb-12 mb-8'>Products of Our Ecosystem</h1>
            <div className='lg:w-3/4 md:w-4/5 w-11/12 mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-y-5'>
                    <div className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                   
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Products;