import { useRef,useEffect } from 'react';

/* imp icons */
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiGit, DiGithubBadge, DiNpm } from 'react-icons/di'
import { SiTailwindcss, SiPhp, SiExpress, SiPostgresql, SiMysql,SiSequelize, SiNodedotjs } from 'react-icons/si'

const Skills = () => {
  const TagCloudFrontend = require('TagCloud');
  const TagCloudBackend = require('TagCloud');
  const markerFront = useRef(null)
  const markerBack = useRef(null)
  const containerFront = '.tagcloud-front'
  const containerBack = '.tagcloud-back'

  const textsFront =  [
    'HTML', 'CSS', 'JS', 'REACT JS', 'TAILWIND CSS', 'GIT', 'GITHUB', 'NPM'
  ];
  const textsBack = [
    'PHP', 'EXPRESS', 'NODE JS', 'POSTEGRESQL', 'MYSQL', 'SEQUELIZE'
  ]

  const options = {radius: 160};

  /* icons array */
  const iconsFront = [
    <DiHtml5 size={50} />, <DiCss3 size={50} />, <DiJavascript size={50} />, <DiReact size={50} />, <SiTailwindcss size={50} />, <DiGit size={50} />, <DiGithubBadge size={50} />, <DiNpm size={50} />
  ]
  const iconsBack = [
    <SiPhp size={50} />, <SiExpress size={50} />, <SiNodedotjs size={50} />, <SiPostgresql size={50} />, <SiMysql size={50} />, <SiSequelize size={50} />
  ]

  useEffect(() => {
    TagCloudFrontend(containerFront, textsFront, options);
    TagCloudBackend(containerBack, textsBack, options)
    // eslint-disable-next-line 
  }, [TagCloudFrontend])

  /* indicator marker blue */
  const moveIndicatorFront = (e) => {
    markerFront.current.style.left = e.target.parentElement.offsetLeft+25+'px'
    markerFront.current.style.top = e.target.parentElement.offsetTop-10+'px'
    markerFront.current.style.width = e.target.parentElement.offsetWidth+'px'
  }

   /* indicator marker blue */
   const moveIndicatorBack = (e) => {
    markerBack.current.style.left = e.target.parentElement.offsetLeft+25+'px'
    markerBack.current.style.top = e.target.parentElement.offsetTop-10+'px'
    markerBack.current.style.width = e.target.parentElement.offsetWidth+'px'
  }

  return (
    <div className="w-full">
      <div className="container mx-auto p-20">
        <div className='mb-16'>
          <h1 className='w-2/4 text-center mx-auto py-2 text-2xl rounded font-bold bg-white text-gray-900'>SKILLS</h1>
        </div>
        <div className='flex justify-center items-center gap-20'>
          <div className="tagcloud-front w-min font-bold text-lg"></div>
          <div className='w-4/12 h-16 bg-emerald-500 flex justify-center items-center rounded shadow-white shadow tracking-wider'>
            <p className='font-bold text-xl'>FRONTEND</p>
          </div>
          <div className='shadow-gray-800 shadow-md rounded-md p-4'>
            <ul className='ul-front relative flex flex-1 flex-wrap justify-center gap-10'>
              {
                iconsFront.map((icon, key) => (
                  <li onMouseMove={moveIndicatorFront} key={key} className='opacity-50 hover:opacity-100 backdrop-blur z-10'>{icon}</li>
                ))
              }
              <div id='marker' ref={markerFront} className='absolute left-14 top-0 transition duration-75 z-1 marker-before'></div>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center gap-20'>
          <div className="tagcloud-back w-min font-bold text-lg"></div>
          <div className='w-4/12 h-16 bg-emerald-500 flex justify-center items-center rounded shadow-white shadow tracking-wider'>
            <p className='font-bold text-xl'>BACKEND</p>
          </div>
          <div className='shadow-gray-800 shadow-md rounded-md p-4'>
            <ul className='ul-front relative flex flex-1 flex-wrap justify-center gap-10'>
              {
                iconsBack.map((icon, key) => (
                  <li onMouseMove={moveIndicatorBack} key={key} className='opacity-50 hover:opacity-100 backdrop-blur z-10'>{icon}</li>
                ))
              }
              <div id='marker' ref={markerBack} className='absolute  left-8 transition duration-75 z-1 marker-before'></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills