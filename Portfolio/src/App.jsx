import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css'
import Landing from './components/landing'
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {

  return (
    <>
    <Router>
    <div className='flex justify-center items-center min-h-screen w-screen bg-gray-900'>
      <div className='flex-col w-11/12 min-h-full justify-center '>
              <div className='flex w-full'>
                  <h1 className='flex text-4xl sm:text-6xl lg:text-8xl h-auto w-auto lg:w-full font-bold text-slate-300 text-start items-end'>HAGEN MENSA-ANNAN</h1>
                  <p className='flex text-3xl sm:text-5xl lg:text-6xl h-auto w-auto lg:w-4/12 text-slate-300 text-start items-end'>Software Developer</p>
              </div>
              <div className='flex flex-wrap justify-center bg-stone-200'>
                <div className='flex font-mono h-full w-11/12 border-b-2 border-orange-600'>
                  <p className='flex text-xl sm:text-2xl pt-5 w-full text-center items-end'>
                    <a href="https://www.google.co.uk/maps/place/Norwich/@52.6410482,1.2452947,13z/data=!3m1!4b1!4m6!3m5!1s0x47d0aad55133f513:0x684ca5e00e12452f!8m2!3d52.6292567!4d1.2978802!16zL20vMHEzNGc?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank">
                    Norwich, United Kingdom
                    </a>
                  </p>
                  <p className='flex text-xl sm:text-2xl pt-5 w-full text-center items-end hover:text-emerald-500'>
                    <a href="https://www.linkedin.com/in/hagen-mensa-annan-a78a631aa/"
                      target="_blank">
                    Available for work!
                    </a>
                  </p>
                  <ul className='flex flex-wrap sm:flex-none justify-center list-none'>
                      <li className='flex items-end px-3 text-xl sm:text-2xl hover:text-orange-600'> 
                        <Link to="/">About</Link>  
                      </li>
                      <li className='flex items-end px-3 text-xl sm:text-2xl hover:text-orange-600'>
                        <Link to="/work">Work</Link>
                          </li>
                      <li className='flex items-end px-3 text-xl sm:text-2xl hover:text-orange-600'>
                        <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
                </div>
              <Routes>
                <Route path="/work" element= {<Work />}/>
                <Route path="/contact" element= {<Contact />}/>
                <Route path="/" element= {<About />}/>
              </Routes>
              </div>
            </div>
        </div>
    </Router>
    </>
  )
}

export default App
