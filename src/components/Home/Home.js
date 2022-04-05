import React from 'react';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <div>
                <div className="flex flex-row  justify-center items-center">
                    <div className="w-1/2 flex-1  px-32">
                        <h1 className='text-6xl '>FEEL THE MUSIC IN YOUR BONES</h1>
                        <p className='m-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum temporibus corrupti, laudantium doloremque magnam expedita saepe cupiditate commodi perspiciatis. Quas id sit sunt dolorum voluptas officia. Iure deserunt voluptatibus eius!</p>
                    </div>

                    <img className='w-1/2 flex-1  justify-center items-centers h-5/6 w-36 p-32' src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl bg-slate-50 px-12 py-8' >Customer Review</h1>
                    <Review></Review>

                </div>


            </div>

        </div>
    );
};

export default Home;