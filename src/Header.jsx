import {useEffect,useState} from 'react';
import bg from './assets/bg.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';

const Header =() =>{
    const words =["A Student","Forever Learner","A Developer"]
    const[index, setIndex]=useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); 
    
        return () => clearInterval(interval); 
    }, []);

    useEffect(()=>{
        const parallax =(e)=>{
            document.querySelectorAll(".layer").forEach((layer)=>{
                const speed = layer.dataset.speed;
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };
        document.addEventListener("mousemove",parallax);
        return()=>{
            document.removeEventListener("mousemove",parallax);
        };
    },[]);

    return(
        <>
        <div className='flex flex-wrap justify-center gap-4 px-4 py-4'>
            <a href="#about" className='text-[20px] md:text-[24px] text-blue-600 bg-pink-100 rounded-full px-4 py-2'>About</a>
            <a href="#education" className='text-[20px] md:text-[24px] text-blue-600 bg-green-100 rounded-full px-4 py-2'>Education</a>
            <a href="#experience" className='text-[20px] md:text-[24px] text-blue-600 bg-pink-100 rounded-full px-4 py-2'>Experience</a>
            <a href="#projects" className='text-[20px] md:text-[24px] text-blue-600 bg-green-100 rounded-full px-4 py-2'>Projects</a>
            <a href="#contact" className='text-[20px] md:text-[24px] text-blue-600 bg-pink-100 rounded-full px-4 py-2'>Contact</a>
        </div>
        <section className='relative w-full h-screen overflow-hidden'>
            <img src={bg} className='relative w-full h-full object-cover'></img>
            <img src={img1} className='layer absolute w-1/2 md:w-75 h-auto left-2 md:left-10 top-5' data-speed="2" alt="Layer 1"></img>
            <img src={img2} className='layer absolute w-1/3 md:w-65 h-auto left-[1px] top-1/2' data-speed="4" alt="Layer 2"></img>
            <img src={img3} className='layer absolute w-3/4 md:w-100 h-auto left-1/4 md:left-6/8 top-70' data-speed="6" alt="Layer 3"></img>
            <img src={img4} className='layer absolute w-1/3 md:w-65 h-auto left-1/4 md:left-120 top-4/6' data-speed="3" alt="Layer 4"></img>
            <img src={img5} className='layer absolute w-1/2 md:w-70 h-auto left-1/3 md:left-4/6 top-0' data-speed="5" alt="Layer 5"></img>
            <h2 className="layer absolute text-xl md:text-4xl font-bold text-black 
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4"
                data-speed="2">Hola, I am Risa, <span className="text-blue-700">&lt; {words[index]} /&gt;</span></h2>
        </section>
        </>
    )
}

export default Header;