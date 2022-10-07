import { useEffect } from 'react';

const Skills = () => {
  const TagCloudFrontend = require('TagCloud');
  

  useEffect(() => {
    const container = '.tagcloud'
    const texts =  [
      'HTML', 'CSS','JS', 'PHP', 'REACT JS', 'NODE JS', 'EXPRESS', 'SQL', 'POSTGRESS', 'GIT', 'GITHUB'
    ];
    const options = {radius: 150, initSpeed: 'slow', maxSpeed: 'fast', containerClass: 'font-bold '};
    TagCloudFrontend(container, texts, options);
    // eslint-disable-next-line 
    
  }, [TagCloudFrontend])
  

  return (
    <div className="w-full h-screen border">
      <div className="container h-screen mx-auto border border-red-600">
        <div className="tagcloud border"></div>
      </div>
    </div>
  )
}

export default Skills