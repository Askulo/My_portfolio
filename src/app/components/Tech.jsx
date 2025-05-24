import React from 'react';
import { BallCanvas } from './canvas';
// import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const technologies = [
  { name: 'HTML', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'TypeScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'React', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Three.js', imgUrl: 'https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_744x750.png' },
  { name: 'Node.js', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'MongoDB', imgUrl: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
  { name: 'Express', imgUrl: 'https://img.icons8.com/color/512/express-js.png' },
  { name: 'Next.js', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
  { name: 'Git', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { name: 'Tailwind CSS', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Framer Motion', imgUrl: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  { name: 'Adobe Illustrator', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
];



const Tech = () => {
  return (
    <>
         <motion.div variants={textVariant()}>
           <h2 className={styles.sectionSubText}>Tools & technologies I work with</h2>
          <p className={styles.heroHeadText}> Skills.</p>
          </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
  
      {technologies.map((tech, index) => (
        <div className='w-28 h-28' key={index}>
          <BallCanvas icon={tech.imgUrl} />
          <p className='text-center'>{tech.name}</p>
          
       
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");