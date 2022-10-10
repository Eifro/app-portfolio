import { useRef,useEffect } from 'react';

/* imp icons */
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiTailwindcss, SiNodedotjs } from 'react-icons/si'

const Skills = () => {
  const TagCloudFrontend = require('TagCloud');
  const marker = useRef(null)
  const iconsFront = [
    <DiHtml5 size={50} />, <DiCss3 size={50} />, <DiJavascript size={50} />, <DiReact size={50} />, <SiTailwindcss size={50} />, <SiNodedotjs size={50} />, <DiGit size={50} />, <DiGithubBadge size={50} />
  ]

  useEffect(() => {
    const container = '.tagcloud'
    const texts =  [
      'HTML', 'CSS', 'JS', 'REACT JS', 'NODE JS', 'TAILWIND CSS', 'GIT', 'GITHUB'
    ];
    const options = {radius: 160, maxSpeed: 'fast'};
    TagCloudFrontend(container, texts, options);
    // eslint-disable-next-line 
  }, [TagCloudFrontend])

  const moveIndicator = (e) => {
    marker.current.style.left = e.target.parentElement.offsetLeft+25+'px'
    marker.current.style.top = e.target.parentElement.offsetTop-10+'px'
    marker.current.style.width = e.target.parentElement.offsetWidth+'px'
  }

  return (
    <div className="w-full h-screen">
      <div className="container h-screen mx-auto px-20">
        <div className='flex justify-center items-center gap-20'>
          <div className="tagcloud w-min font-bold text-lg"></div>
          <div className='w-4/12 h-16 bg-emerald-500 flex justify-center items-center rounded shadow-white shadow tracking-wider'>
            <p className='font-bold text-xl'>FRONTEND</p>
          </div>
          <div className='shadow-gray-800 shadow-md rounded-md p-4'>
            <ul className='ul-front relative flex flex-1 flex-wrap justify-center gap-10'>
              {
                iconsFront.map((icon, key) => (
                  <li onMouseMove={moveIndicator} key={key} className='opacity-50 hover:opacity-100 backdrop-blur z-10'>{icon}</li>
                ))
              }
              <div id='marker' ref={marker} className='absolute top-0 transition duration-75 z-1 marker-before'></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills