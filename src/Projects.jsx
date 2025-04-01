const Projects = () =>{
    return(
        <>
        <h1 id="projects" className='text-center pt-15 text-[25px] text-blue-600'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-20 pb-20'>
            <div className='bg-white text-center p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>Bank-Management-System</h2>
                <br></br>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>Java</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm'>MySQL</span>
                    
                </div>
            </div>
            <div className='bg-white text-center p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>Medisphere</h2>
                <br></br>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>Html/css/js</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm'>Python</span>
                    <span className='px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>MongoDB</span>
                </div>
            </div>
            <div className='bg-white text-center p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>Asstrosa</h2>
                <br></br>
                <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm'>html</span>
                    <span className='px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm'>css</span>
                    <span className='px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>Javascript</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects;
