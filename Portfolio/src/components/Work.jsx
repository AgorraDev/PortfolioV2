import { useState } from "react";

const Work = () => {
    const [projects, setProjects] = useState([
        {'id' : 1, 'title' : 'Agora Store', 'description': 'A basic eccommerce site using my own brand of t-shirts', 'link': 'https://agora-new-three.vercel.app/', 'image' : 'src/assets/AgoraStore_portfolio_bg.png' },
        // {'id' : 2, 'title' : 'TarotReader', 'description': 'An AI powered tarot reading web app', 'link': '/projects/2' },
        // {'id' : 3, 'title' : 'Project3', 'description': 'Describing what I have worked on', 'link': '/projects/3' },
        // {'id' : 4, 'title' : 'Project4', 'description': 'Describing what I have worked on', 'link': '/projects/4' }, 
        // {'id' : 5, 'title' : 'Project4', 'description': 'Describing what I have worked on', 'link': '/projects/4' },
        // {'id' : 6, 'title' : 'Project4', 'description': 'Describing what I have worked on', 'link': '/projects/4' },
    ])

    return (
        <>
            <h3 className="text-center w-11/12 pt-5 text-4xl font-mono underline">Previous Work</h3>
        <div className='flex flex-wrap px-10 py-5 size-11/12 place-center justify-center' >
            <div className="flex flex-wrap h-full justify-around items-center">
                {
                projects.length > 0 ? (
                projects.map(project => (
                    <>
                    <a key={project.id} href={project.link} className="h-fit w-auto m-2">
                    <div className={`p-2 my-1 h-48 bg-[url(${project.image})] bg-cover hover:border-4 hover:border-orange-600`}>
                    </div>
                    <p className="text-center">{project.title}</p>
                    <p className="text-center">{project.description}</p>
                    </a>
                    </>
                ))
            ) : (<p>Loading...</p>)
            }
            </div>
        </div>
        </>
    )
}

export default Work;