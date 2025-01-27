import Languages from "./Languages";

const About = () => {
    return (
        <>
           <div className='grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 w-11/12 h-11/12 place-center' >
                <div className='flex flex-wrap justify-center items-center size-full'>
                    <div className='flex size-full sm:size-80'>
                        <img src="Portfolio\public\Illustraion_01.svg" alt="photo of hagen" className=''/>
                    </div>

                </div>
                <div className="flex items-start sm:items-center">
                    <p className='flex font-mono text-center text-2xl sm:text-3xl lg:text-4xl'>                         
                        I'm passionate about building engaging, user-centered software.
                        I work mainly with React, Node, and Express to build aesthetic websites and apps with
                        clean designs.
                    </p>
                </div>
                <div>
                    <div className='flex flex-wrap px-10'>
                        <Languages />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="sm:size-6/12 p-5">
                        <img src="Portfolio\public\Asset_2.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

