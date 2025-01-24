import { useState } from "react";

const Contact = () => {

    const [socials, setSocials] = useState([
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/hagen-mensa-annan-a78a631aa/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'},
        {name: 'GitHub', link: 'https://github.com/AgorraDev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'}
    ]);
    return (
        <>
        <div className='flex-col justify-center size-11/12 pb-10'>
        <h2 className="font-mono underline pt-5 w-full text-2xl sm:text-3xl text-center">Get in touch!</h2>
        <p className='w-full text-center text-xl sm:text-2xl py-4'>thehagenannan@gmail.com</p>
        <ul className="flex-col w-full">
        {socials.length > 0 ? (
            socials.map((item, index) => (
                <li key={index} className="w-full py-2">
                    <a href={item.link} className="w-full">
                    <div className="flex w-full justify-center ">
                    <img src={item.icon} alt={item.name} className="size-10"/>
                    <p className="text-2xl hover:text-orange-600">{item.name}</p>
                    </div>
                    </a>
                </li>
            ))
        ) : (
            <p>Loading socials...</p>
        )}
        </ul>
        </div>
        </>
    )
}

export default Contact;