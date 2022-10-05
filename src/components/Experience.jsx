/* import ProgrammingImg from '../assets/img/programming.jpg'
 */
const Experience = () => {
  const experiences = [
    {title: 'Title 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, architecto minus tempora neque ipsam est accusantium sapiente debitis temporibus quam assumenda reiciendis incidunt ut maiores, delectus beatae nam eveniet perferendis.'},
    {title: 'Title 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, architecto minus tempora neque ipsam est accusantium sapiente debitis temporibus quam assumenda reiciendis incidunt ut maiores, delectus beatae nam eveniet perferendis.'},
    {title: 'Title 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, architecto minus tempora neque ipsam est accusantium sapiente debitis temporibus quam assumenda reiciendis incidunt ut maiores, delectus beatae nam eveniet perferendis.'},
    {title: 'Title 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, architecto minus tempora neque ipsam est accusantium sapiente debitis temporibus quam assumenda reiciendis incidunt ut maiores, delectus beatae nam eveniet perferendis.'}
  ]

  return (
    <div className="w-full border">
      <div className="container mx-auto px-4 border border-red-600">
        {experiences.map((experience, index) => (
          <div key={index} className='grid grid-cols-9'>
            <div className={`col-span-4 ${index % 2 !== 0 ? 'order-last' : ''} bg-white text-gray-900 p-4 rounded-md`}>
              <h1>{experience.title}</h1>
              <p>{experience.description}</p>
            </div>
            <div className={`col-span-1 ${index % 2 !== 0 ? 'order-2' : ''} relative flex justify-center items-center`}>
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