import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import HomepageReview from '../HomepageReview/HomepageReview';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <div>
                <div className="flex flex-row  justify-center items-center">
                    <div className="w-1/2 flex-1  px-32">
                        <h1 className='text-6xl '>FEEL THE MUSIC IN YOUR BONES</h1>
                        <p className='m-10'>Nowadays headphone is becoming an essential gadget for us.Choosing the best headphones for you depends on several factors, including your budget, the features you need and any preferences you have about how they look and how fit.</p>
                    </div>

                    <img className='w-1/2 flex-1  justify-center items-centers h-5/6 w-36 p-32' src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl bg-slate-50 px-12 py-8' >Customer Review</h1>
                    <HomepageReview></HomepageReview>
                    <div className=' mb-52 text-3xl px-10 border-2 w-auto rounded'>
                        <CustomLink to='/review'>See ALL Reviews</CustomLink>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default Home;