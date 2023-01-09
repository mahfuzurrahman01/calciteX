import React from 'react';
import { motion as m } from 'framer-motion';
const About = () => {
    return (
        <div>
            <m.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: "0%" }} transition={{ duration: 0.75, ease: "easeOut" }} exit={{ opacity: 0 }} className="p-6  my-10 flex flex-col justify-center items-center  text-gray-700 w-4/6 mx-auto rounded border border-gray-300 shadow-lg shadow-pink-300">
                <div className='overflow-hidden'>
                    <m.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="text-7xl font-bold  text-center gradient">Our team</m.h1>
                </div>
                <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, delay: 1.2 }} className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero porro a. Fugit, architecto praesentium quidem magnam nobis quasi illo libero alias earum hic eligendi obcaecati accusamus itaque, ad numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores fuga possimus quidem assumenda quasi exercitationem culpa? Laboriosam fugiat in a? Perspiciatis, nam alias. Consectetur corporis exercitationem iure nobis alias!</m.p>
            </m.section>

        </div>
    );
};

export default About;
