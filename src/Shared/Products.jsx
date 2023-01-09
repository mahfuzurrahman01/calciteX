import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({delay: 0.7,useClassNames: false});

const Products = () => {
    return (
        <div className='bg-gray-100 lg:pt-32 md:pt-20 pt-5 lg:px-10 md:px-5 px-2 '>
            <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold text-center gradient lg:mb-20 md:mb-12 mb-8'>Products of Our Ecosystem</h1>
            <div className='lg:w-3/4 md:w-4/5 w-11/12 mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-y-5'>
                    <div data-aos="fade-right" className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://img.freepik.com/free-psd/laptop-screen-mockup-psd-digital-device_53876-141752.jpg?w=1060&t=st=1672905806~exp=1672906406~hmac=b5e23c2a5c9db56ae347fbc958454cd458390255495957ef9d491264b95ba50b" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div data-aos="fade-left" className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://img.freepik.com/free-vector/gradient-ui-kit-collection_23-2149203253.jpg?w=1060&t=st=1672905985~exp=1672906585~hmac=9a93697e0bbb98cad4d1bf2f93d20c0048a9a0dc3f743dba970737f25b81facb" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div data-aos="fade-right" className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://img.freepik.com/free-vector/set-modern-website-landing-page-design-templates-mobile-phone-tablet-with-gallery-articles-contact-form-flat-isolated-illustration_1284-60948.jpg?w=740&t=st=1672905968~exp=1672906568~hmac=e05641bd7b7f575ac1e4aa9dd93bdc869accf95d5165f63244acb98a48237a1d" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase gradient">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                        </div>
                        <p className=" text-gray-700">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    </div>
                    <div data-aos="fade-left" className="max-w-lg p-6 rounded shadow-lg  bg-white shadow-gray-200  text-gray-900">
                        <img src="https://img.freepik.com/free-vector/ecommerce-email-templates-with-photo_23-2148714843.jpg?w=1060&t=st=1672906032~exp=1672906632~hmac=9b1b7901f789a58ebcbb30aadb3da14dfee8dd7dcb6c51dcd0ad97bbf73f5a7d" alt="" className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
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