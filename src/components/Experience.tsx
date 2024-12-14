'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
interface ExperienceItem {
    title: string;
    company: string;
    duration: string;
    description: string;
    isLeft?: boolean;
}
const experiences: ExperienceItem[] = [
    {
        title: 'Frontend Developer',
        company: 'Winvesta',
        duration: 'April 2023 - Dec 2024',
        description: 'Working on creating and optimizing financial platforms.',
        isLeft: true
    },
    {
        title: 'Associate Software Engineer',
        company: 'Mynd Integrated Solutions Pvt. Ltd.',
        duration: 'May 2022 - April 2023',
        description: 'Developed websites with authentication and file handling.',
        isLeft: false
    }
]
const ExperienceCard = ({ exp, index}: { exp: ExperienceItem; index: number}) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-100px'});
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
        ref={cardRef}
        className={`flex items-center justify-between mb-8 w-full ${exp.isLeft ? 'flex-row' : 'flex-row-reverse'} h-48`}
        initial={{ opacity: 0, x: exp.isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x:exp.isLeft ? -50 : 50}}
        transition={{ duration: 0.5, delay: index* 0.2}}
        >
            
            <motion.div
            className={`w-1/2 group ${exp.isLeft ? 'text-right pr-2 sm:pr-8' : 'text-left pl-2 sm:pl-8'} cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.2}}
            >
                <Link href="/experience">
                <div className='py-4 sm:py-8 px-4 sm:px-6 rounded-lg bg-background-secondary hover:shadow-sm transition-colors'>
                <h3 className='text-xl sm:text-3xl font-bold text-gray-200'>{exp.company}</h3>
                <p className='text-gray-400 text-base sm:text-xl font-semibold py-1'>{exp.title}</p>
                <p className='text-xs sm:text-sm text-gray-500'>{exp.duration}</p>
                <p className='text-xs sm:text-sm text-gray-400 mt-2'>{exp.description}</p></div>
                </Link>
            </motion.div>
           
            {/* timeline point */}
            <motion.div
            className={`absolute ${exp.isLeft ? 'right-1/2' : 'left-1/2'} transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10`}
            initial={{ scale: 0}}
            animate={isInView ? { scale: isHovered ? 1.5 : 1, backgroundColor: isHovered ? '#00cc66' : '#4BFFA5'} : { scale: 0}}
            transition={{ duration: 0.2 }}
            />
            {/* <div className='w-5/12'></div> */}
        </motion.div>
    )
}
const Experience = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
  return (
    <div className='h-[100vh] relative flex items-center bg-background-primary'>
        <div ref={ref} className='relative container mx-auto sm:px-6 sm:py-16'>
            <motion.div
            className='absolute left-1/2 transform  w-0.5 h-full bg-gradient-to-b from-text-primary to-text-primary bg-no-repeat'
            style={{
                scaleY,
                transformOrigin: 'top'
            }}
            />
            <div className='relative'>
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default Experience;