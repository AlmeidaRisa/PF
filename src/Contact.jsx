const Contact = ()=>{
    return(
        <>
        <div className='bg-blue-600 min-h-[80vh] py-8 px-4'>
            <h1 id="contact" className="text-center text-white text-2xl md:text-3xl font-bold mb-6">Connect With Me</h1>
            <div className='max-w-md mx-auto bg-white rounded-lg shadow-xl p-4 md:p-6'>
                <div className='space-y-4'>
                    {/* Email */}
                    <div className='flex items-center justify-center space-x-3'>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:your.email@example.com" className='text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base'>
                            risaalmeida03@gmail.com
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className='flex justify-center space-x-8'>
                        {/* LinkedIn */}
                        <a href="www.linkedin.com/in/risa-almeida-84a07b230" target="_blank" rel="noopener noreferrer" 
                           className='text-gray-600 hover:text-blue-600 transition-colors'>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.15.781-1.15 1.601v5.604h-3v-11h3v1.765c.5-.8 1.6-1.1 2.5-1.1 1.9 0 3.5 1.6 3.5 3.5v6.845z"/>
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/AlmeidaRisa/AlmeidaRisa" target="_blank" rel="noopener noreferrer"
                           className='text-gray-600 hover:text-blue-600 transition-colors'>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='text-center text-white mt-6 text-sm'>
                <p>© {new Date().getFullYear()} Risa Almeida. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Contact;