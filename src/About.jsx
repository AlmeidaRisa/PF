const About = () =>{
    return(
        <>
        <div className='max-w-4xl mx-auto px-4 py-12'>
            <h1 id="about" className='text-center pt-15 text-[25px] text-blue-600'>About Me</h1>
            <div className='bg-white rounded-lg shadow-lg p-6 md:p-8'>
                <h2 className='text-lg md:text-xl text-gray-700 leading-relaxed mb-6'>
                    Hello, I am Risa Almeida, a Computer Engineer and 
                    a java programmer who wears glasses because I cannot C#. Moreover, my interests lie 
                    in Natural Language Processing and front-end web development and I am currently exploring
                    the backend as well. 
                    And fun fact- "I can code without coffee☕".
                </h2>
                <p className='italic text-center text-gray-600 text-lg md:text-xl'>
                    "You define your own life, don't let people write your &lt;Script&gt;" - Oprah Winfrey
                </p>
            </div>
        </div>
        </>
    )
}
export default About;