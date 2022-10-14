import { DiGithubBadge } from 'react-icons/di';
import { BiLink } from 'react-icons/bi'
import AppWeather from '../assets/img/app-weather.png';
import AppBusiness from '../assets/img/app-business.png';
import AppImc from '../assets/img/app-imc.png';

const Works = () => {
  const works = [
    {
      title: 'CLIMATOONS',
      name: 'APP WEB WEATHER',
      img: AppWeather,
      github: 'https://github.com/Eifro/app-weather',
      link: 'https://climatoons.vercel.app/',
      description: 'Aplicación web desarrollada para obtener información climática de un determinado país/ciudad por medio de una búsqueda.',
    },
    {
      title: 'DATA.B',
      name: 'SITEWEB DATA PRACTICE',
      img: AppBusiness,
      github: 'https://github.com/Eifro/website-practice',
      link: 'https://databusiness.vercel.app/',
      description: 'Sitio web realizado como práctica para poder mejorar mis habilidades en las tecnologías usadas en este sitio web.',
    },
    {
      title: 'CALCULADORA IMC',
      name: 'APP WEB IMC',
      img: AppImc,
      github: 'https://github.com/Eifro/calculadora-imc',
      link: 'https://calcula2imc.000webhostapp.com/',
      description: 'Aplicación web desarrollada para poder calcular el peso ponderal IMC de una persona tan solo ingresando sus datos como el peso y altura.',
    },
  ]

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-20">
        <div className='mb-16'>
            <h1 className='w-2/4 text-center mx-auto py-2 text-2xl rounded font-bold bg-white text-gray-900'>WORKS</h1>
        </div>
        <div className="grid grid-cols-2 gap-12">
          {
            works.map((work, key) => (
              <div key={key} className='bg-white text-gray-900 p-4 rounded-xl'>
                <figure className="overflow-hidden">
                  <img src={work.img} alt={work.name} className='w-5/6 h-72 mx-auto rounded-md hover:scale-110 transition ease-in duration-300' />
                </figure>
                <div className='text-center mt-1'>
                  <h1 className='font-bold text-xl'>{work.title}</h1>
                  <h2 className='font-bold opacity-90'>{work.name}</h2>
                </div>
                <div className='flex justify-center'>
                  <a href={work.github} target='_blank' rel="noreferrer" className='transition duration-300 hover:scale-110 hover:text-emerald-500'><DiGithubBadge size={35} /></a>
                  <a href={work.link} target='_blank' rel="noreferrer" className='transition duration-300 hover:scale-110 hover:text-emerald-500'><BiLink size={35} /></a>
                </div>
                <p className='text-justify font-medium'>{work.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Works