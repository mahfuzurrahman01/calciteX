import React from 'react';
import image from '../assets/banner/10798281_19362653.jpg'
const banner = () => {
    return (
        <div className='w-4/5 mx-auto flex lg:flex-row flex-col-reverse justify-center items-center'>
            <div className='lg:w-1/2 w-full'>
               <h1 className='text-2xl font-bold'>hello there</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolor minus? Accusamus perspiciatis earum porro illum ullam unde veritatis quae, quos perferendis exercitationem atque vero voluptatum, mollitia pariatur, explicabo aliquid? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi aspernatur temporibus aut sapiente voluptate asperiores quam eum, inventore quas maxime dolore accusamus odio labore, ea, magnam optio obcaecati saepe odit.</p>
            </div>
            <div className='lg:w-1/2 w-full'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default banner;