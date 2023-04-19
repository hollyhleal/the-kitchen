import React from 'react';
import Paddle from './pickleBall-Paddle.jpg'

export default function Home () {
    return(
    <>
        <div className="container mx-auto grid grid-cols-1 place-content-center">
            <div className="place-self-center">
                <div className="bg-cover bg-center"></div>
            </div>
        </div>
        <div className="container mx-auto grid grid-cols-3">
            <div className="place-self-center">
                test
            </div>
            <div className="place-self-center">
                test
            </div>
            <div className="place-self-center">
                test
            </div>
        </div>
    </>
    )
}