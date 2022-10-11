import ProgrammingImg from '../assets/img/programming.jpg'
import SupportImg from '../assets/img/support.jpg'
import ProgrammingJrImg from '../assets/img/programming-jr.jpg'; 
import ConstancyI from '../assets/docs/constancia-i.pdf';
import ConstancyII from '../assets/docs/constancia-ii.pdf';
import ConstancyIII from '../assets/docs/constancia-iii.pdf';

const Experience = () => {
  const experiences = [
    {title: 'Programador Web', img: ProgrammingImg, constancy: ConstancyI, position: 'Practicante', enterprise: 'I.E.S.T.P. Manuel Seoane Corrales', date: 'Febrero - Abril [2021]', description: 'Implementar herramientas y plantillas para el sitio web institucional, actualizar y uso de CPanel para la administración. Diseñar plantillas para los cursos de estudiantes.'},
    {title: 'Soporte Técnico', img: SupportImg, constancy: ConstancyII, position: 'Practicante', enterprise: 'I.E.S.T.P. Manuel Seoane Corrales', date: 'Abril - Julio [2021]', description: 'Grupo de 4 técnicos para realizar conexiones de red, internet y comunicación entre ordenadores de un salón de secretaría, profesores y reuniones.'},
    {title: 'Desarrollador  Web Jr.',  img: ProgrammingJrImg, constancy: ConstancyIII, position: 'Practicante', enterprise: 'Neon House Led S.A.C.', date: 'Agosto - Noviembre [2021]', description: 'Integrante de un grupo de desarrollo. Encargado de realizar actualizaciones/modificaciones de los sitios/páginas/herramientas web de la empresa. Tanto como ayudar en el modelamiento de base de datos y lógica.'},
  ]

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-20">
        <div className='mb-16'>
          <h1 className='w-2/4 text-center mx-auto py-2 text-2xl rounded font-bold bg-white text-gray-900'>EXPERIENCE</h1>
        </div>
        {experiences.map((experience, index) => (
          <div key={index} className='grid grid-cols-9 -z-10'>
            <div className={`col-span-4 ${index % 2 !== 0 ? 'order-last' : ''} flex gap-4 bg-white text-gray-900 p-4 rounded-md`}>
              <div className=''>
                <img src={experience.img} alt={experience.title} className='w-28 h-24 rounded-full' />
              </div>
              <div className='flex-1'>
                <h1 className='text-lg font-bold'>{experience.title}</h1>
                <h2 className='font-medium text-gray-600'>{experience.position}</h2>
                <h3 className='font-medium text-gray-600'>{experience.enterprise}</h3>
                <h4 className='font-medium text-gray-600'>{experience.date}</h4>
                <p className='text-justify mb-2'>{experience.description}</p>
                <a href={experience.constancy} target='_blank' rel="noreferrer" className='bg-[#bae8e8] px-3 py-1 rounded font-semibold opacity-95'>Ver Certificado</a>
              </div>
            </div>
            <div className={`col-span-1 ${index % 2 !== 0 ? 'order-2' : ''} relative flex justify-center items-center -z-10`}>
              <div className='h-full w-1 bg-emerald-500'></div>
              <div className='h-4 w-4 absolute rounded-full bg-emerald-500'></div>
            </div>
            <div className='col-span-4'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience