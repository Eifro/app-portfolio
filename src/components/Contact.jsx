import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineUser, AiOutlineMessage, AiOutlineSend, AiOutlineYoutube } from 'react-icons/ai'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className="w-full">
      <div className="container mx-auto px-4 py-10">
        <div className='mb-16'>
          <h1 className='w-2/4 text-center mx-auto py-2 text-2xl rounded font-bold bg-white text-gray-900'>CONTACT</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className='py-10 px-16 bg-slate-200 text-gray-900'>
            <div className='mb-8 font-semibold'>
              <h1 className='font-bold text-xl mb-5'>Contacto Personal</h1>
              <div className='flex gap-3 mb-3'>
                <HiOutlinePhone size={30} />
                <p>+51 997 861 404</p>
              </div>
              <div className='flex gap-3 mb-3'>
                <HiOutlineMail size={30} />
                <p>miguelespiritu.dv@gmail.com</p>
              </div>
              <div className='flex gap-3'>
                <HiOutlineLocationMarker size={30} />
                <p>Perú, Lima</p>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl mb-5'>Social</h1>
              <div className='flex gap-8'>
                <a href='https://www.linkedin.com/in/miguel-espiritu/' target='_blank' rel="noreferrer" className='flex gap-3 duration-500 hover:scale-125 hover:text-blue-600'>
                  <AiOutlineLinkedin size={30} />
                </a>
                <a href='https://github.com/Eifro' target='_blank' rel="noreferrer" className='flex gap-3 duration-500 hover:scale-125 hover:text-gray-600'>
                  <AiOutlineGithub size={30} />
                </a>
                <a href='https://www.youtube.com/c/Codxut' target='_blank' rel="noreferrer" className='flex gap-3 duration-500 hover:scale-125 hover:text-red-600'>
                  <AiOutlineYoutube size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className='bg-emerald-500 py-10 px-16'>
            <form action="" className='text-white font-bold'>
              <div className='relative mb-3'>
                <AiOutlineUser size={25} className='absolute left-2 top-2' color='white' />
                <input type="text" autoComplete='nope' placeholder='Full Name' className='w-full px-10 py-2 outline-none bg-transparent rounded border placeholder:text-white' />
              </div>
              <div className='relative mb-3'>
                <HiOutlineMail size={25} className='absolute left-2 top-2' color='white' />
                <input type="email" autoComplete='nope' placeholder='Email' className='w-full px-10 py-2 outline-none bg-transparent rounded border placeholder:text-white' />
              </div>
              <div className='relative mb-3'>
                <AiOutlineMessage size={25} className='absolute left-2 top-2' color='white' />
                <textarea rows="8" placeholder='Message' className='w-full px-10 py-2 outline-none bg-transparent rounded resize-none border placeholder:text-white'></textarea>
              </div>
              <button className='flex justify-center gap-2 w-full py-3 rounded-full uppercase font-bold border'>Enviar Mensaje<AiOutlineSend size={25} /></button>
            </form>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact