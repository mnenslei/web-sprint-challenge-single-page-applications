import React from "react";
import { Link } from 'react-router-dom';

function Home () {

    return (
        <div className='homepage'>
            <img 
                className='homepage-img'
                src='https://www.rover.com/blog/wp-content/uploads/2017/03/800_9397-960x540.jpg'
                alt='dog holding pizza in mouth'
            />
        </div>
    );

}

export default Home;