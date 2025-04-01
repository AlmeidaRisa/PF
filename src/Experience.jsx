const Experience = () =>{
    return(
        <>
        <h1 id="experience" className='text-center pt-15 text-[25px] text-blue-600'>Experience</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-20 pb-20 max-w-6xl mx-auto'>
            <div className='bg-white text-center p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>Zoomlocal</h2>
                <div className='space-y-2'>
                    <h3 className='text-lg text-gray-700'>SDE</h3>
                </div>
                <div className='mt-4 text-sm text-gray-500'>
                    
                </div>
            </div>
            <div className='bg-white text-center p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>NuWebWave Technologies</h2>
                <div className='space-y-2'>
                    <h3 className='text-lg text-gray-700'>Content Writer</h3>
                    <h3 className='text-lg text-gray-700'>Frontend Developer</h3>
                </div>
                <div className='mt-4 text-sm text-gray-500'>
                    
                </div>
            </div>
            <div className='bg-white text-center p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>Ummeed Child Development (NGO)</h2>
                <div className='space-y-2'>
                    <h3 className='text-lg text-gray-700'>Research Intern</h3>
                </div>
                <div className='mt-4 text-sm text-gray-500'>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Experience;