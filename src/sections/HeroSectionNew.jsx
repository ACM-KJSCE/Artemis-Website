const HeroSectionNew = () => {

  const handleClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdtwlkLH8CFNNH1VXfI5wUhSZ0sQdVWEPyKjL7VzfneECpHRQ/viewform', '_blank');
  }

  return (
    <div className='relative min-h-screen w-full flex items-center justify-center poster-frame' id='Hero'>
        <img 
          className='absolute inset-0 w-full h-full object-cover opacity-50' 
          src='/Artemis_poster_design.png' 
          alt='Background Image'
        />
        <div className='relative w-full md:absolute md:inset-0 grid grid-cols-1 md:grid-cols-2 z-10 px-4 sm:px-6 md:px-8 md:mt-0 mt-[100px] pb-10 md:pb-0'>
            <div className='flex flex-col justify-center md:items-start items-center space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 mt-4 md:mt-8'>
                <h1 className='text-6xl md:text-7xl lg:text-9xl font-bold text-[#3B2A1B] font-primary'>
                    ARTEMIS
                </h1>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#3B2A1B]'>
                    15<sup>th</sup> October, 2026
                </p>
                <button 
                  onClick={()=>{
                    handleClick()
                  }}
                  className='text-lg cursor-pointer rounded-xl sm:text-2xl md:text-3xl lg:text-4xl bg-[#3A2819] text-[#F1DDA8] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-bold border-4 border-[#B8923F] hover:scale-105 transition-all duration-300'
                >
                    Register Now
                </button>
            </div>
            <div className='flex justify-center items-center mt-8 md:mt-12 lg:mt-24'>
                <img 
                  src='/hero-statue.webp' 
                  alt='Hero Image' 
                  className='w-full sm:w-4/5 md:w-3/4 lg:w-4/5 h-auto max-w-[300px] sm:max-w-[500px] md:max-w-[600px]'
                />
            </div>
        </div>
    </div>
  )
}

export default HeroSectionNew