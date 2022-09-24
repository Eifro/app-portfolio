import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-6 pt-20 h-screen">
        <div className='flex flex-col gap-2 w-full'>
          <h1 className='text-3xl font-bold'>Frontend Developer</h1>
          <p className='font-medium text-gray-200'>Entusiasta TI enfocado en el Frontend haciendo uso de las tecnologías adecuadas que se usan en la actualidad.</p>
          <a href="#">Download CV</a>
        </div>
        <div className='w-full'>
          <img src={HeroImage} alt='HeroImage' className='w-3/5' />
        </div>
      </div>
    </div>
  )
}

export default Hero