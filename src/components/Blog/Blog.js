import React from 'react';

const Blog = () => {
    return (
        <div className='p-10 mt-60 gap-10  rounded flex  justify-center align-middle'>
            <div className='border-8 rounded gap-20 p-10 bg-slate-100 '>
                <h1 className=' mb-7 font-bold'>What is contex API?</h1>
                <p>The Contex API is used for producing global variable effectively. Using this,the props dreeling is not required. It works more like a wifi network the components under this network can access the prop more effectively.</p>
            </div>
            <div className='border-8 rounded p-10 bg-slate-100'>
                <h1 className=' mb-7 font-bold'>What is Symatic Tag?</h1>
                <p>Semantic HTML tags provide information about their contents in addition to how they appear on a page. The browser recognizes text encased in the code tag as some kind of coding language right away. Instead of attempting to render the code, the browser recognizes that the text is being used as an example of code in an article or online tutorial.</p>

            </div>
        </div>
    );
};

export default Blog;