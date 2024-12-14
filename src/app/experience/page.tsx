import React from 'react'

const page = () => {
  return (
    <div className='min-h-[100vh] mx-auto py-20 md:p-20 bg-background-secondary'>
      <div className='text-center font-bold text-2xl lg:text-4xl uppercase pt-4 md:pt-8 lg:pt-10'>My experiences</div>
      <div className='my-8 mx-4 leading-8 bg-background-primary p-4 md:p-6 lg:p-8 rounded-xl'>
        <div className='text-2xl mb-2 font-semibold'>Winvesta <a href='https://www.winvesta.in/' className='text-gray-400' target='_blank'>(www.winvesta.in)</a></div>
        <div className='font-semibold text-xl text-gray-300'>Frontend Developer</div>
        <div className='text-sm my-1 text-gray-500'>[April 2023 - Dec 2024]</div>
        <div className='text-gray-300 font-semibold'>Responsibilities And Achievements:</div>
        <ul className='text-gray-400 list-disc pl-4'>
          <li>Spearheaded the development of scalable frontend solutions for financial applications, ensuring compliance with global standards.</li>
          <li>Optimized application performance, achieving faster load times and smoother interactions.</li>
          <li>Enchanced the user interface by integrating advanced animations and responsive layouts using modern CSS frameworks(TailwindCSS).</li>
          <li>Worked closely with backend developers to integrate APIs, ensuring seamless data flow and synchronization.</li>
          <li>Provided technical leadership and guidance to junior developers, fostering a culture of collaboration and knowledge sharing.</li>
        </ul>
        <div className='text-gray-300 font-semibold'>Technologies Used:</div>
        <div className='text-gray-400'>Javascript, React, Context API, Redux, MySql, Tailwind CSS, Material UI, Axios, PWA, Git, Bitbucket, CI/CD pipelines, AWS</div>
      </div>
      <div className='my-8 mx-4 leading-8 bg-background-primary p-4 md:p-6 lg:p-8 rounded-xl'>
        <div className='text-2xl mb-2 font-semibold'>Mynd Integrated Solutions Pvt. Ltd. <a href='https://www.myndsolution.com/' className='text-gray-400' target='_blank'>(www.myndsolution.com)</a></div>
        <div className='font-semibold text-xl text-gray-300'>Associate Software Engineer</div>
        <div className='text-sm my-1 text-gray-500'>[May 2022 - April 2023]</div>
        <div className='text-gray-300 font-semibold'>Responsibilities And Achievements:</div>
        <ul className='text-gray-400 list-disc pl-4'>
          <li>Build and maintained dynamic web applications with a focus on user experience and responsive design.</li>
          <li>Developed a robust authentication system to manage user logins and roles securely.</li>
          <li>Desinged and implemented a feature allowing users to upload PDF documents, enabling semaless backend integration for database storage and retrieval.</li>
          <li>Conducted in-depth debugging and resolved critical issues, enhancing the overall functionality of the application.</li>
          <li>Collaborated with cross-funcational teams to align development with business goals.</li>
        </ul>
        <div className='text-gray-300 font-semibold'>Technologies Used:</div>
        <div className='text-gray-400'>HTML5, CSS3, Javascript, React, Redux, Bootstrap, Material UI, Axios, Git, Github</div>
      </div>
    </div>
  )
}

export default page