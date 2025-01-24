import { useState } from 'react'
import About from './About';

const Landing = () => {
    return (
        <>
        <div className='flex flex-wrap size-full justify-center'>
            <div className='flex flex-none'>
                <h1 className='flex text-8xl h-full w-auto font-bold text-slate-300 text-start items-end'>HAGEN MENSA-ANNAN</h1>
                <span className='flex text-7xl text-center h-full text-slate-300 text-start items-center'>Software Developer</span>
            </div>
            <div className='flex flex-wrap justify-center w-full h-11/12 bg-stone-200'>

            </div>
        </div>
        </>

    )
}

export default Landing;