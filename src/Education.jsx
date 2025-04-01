const Education = () =>{
    return(
        <>
        <h1 id="education" className='text-center pt-15 text-[25px] text-blue-600'>Education</h1>
        <div className='flex flex-col md:flex-row justify-center gap-4 pt-20 pb-20 px-4'>
        <div className='bg-white w-full md:w-92 text-center pb-20 shadow-lg rounded-lg'>
            <h2 className='pt-15 text-lg md:text-xl font-bold'>Fr. Conceicao Rodrigues College of Engineering </h2><br />
            <h3 className='text-base md:text-lg'>B.E. Computer Engg</h3>
        </div>
        <div className='bg-white w-full md:w-92 text-center pb-20 shadow-lg rounded-lg'>
            <h2 className='pt-15 text-lg md:text-xl font-bold'>Thomas Baptista Junior College</h2><br />
            <h3 className='text-base md:text-lg'>HSC</h3>
        </div>
        <div className='bg-white w-full md:w-92 text-center pb-20 shadow-lg rounded-lg'>
            <h2 className='pt-15 text-lg md:text-xl font-bold'>Notre Dame School </h2><br />
            <h3 className='text-base md:text-lg'>CBSE</h3>
        </div>
        </div>
        </>
    )
}
export default Education;