import HeroImg from '../assets/img/hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex items-center">
      <div className='container mx-auto flex px-20'>
        <div className='md:-z-10 flex-1 object-cover flex justify-center'>
          <img src={HeroImg} alt="HeroImage" className='w-4/6 h-max rounded-xl contrast-125 brightness-110' />
        </div>
        <div className='flex flex-col gap-2 justify-center'>
          <h1 className='lg:text-4xl font-bold'>Frontend Developer</h1>
          <h2 className='lg:text-lg font-medium'>Entusiasta TI enfocado en el Frontend haciendo uso de las tecnologías actuales.</h2>
          <a href="" className='w-32 bg-emerald-500 font-bold text-center p-2 rounded hover:scale-105 duration-300'>Download CV</a>
        </div>
      </div>
      <div id='scroll-down' className='h-12 w-8 border-2 absolute left-2/4 bottom-10 rounded-2xl cursor-pointer'></div>
    </section>
  )
}

export default Hero