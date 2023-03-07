import React from 'react'
import Header from '../../Components/Header';
import HarrisonAndJonathon from '../../Assets/harrison-and-jonathon.png';

// Icons
import LinkedInIcon from '../../Assets/icons/linkedin.svg';
import TwitterIcon from '../../Assets/icons/twitter.svg';
import GithubIcon from '../../Assets/icons/github.svg';
import DribbbleIcon from '../../Assets/icons/dribbble.svg';

function Home() {
  const posts = [
    {
      title: 'Some Post Title',
      image: 'https://picsum.photos/400',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui aliquid reprehenderit fugit tempora. Ullam quos corporis quasi nulla modi commodi ut! Deleniti, distinctio delectus maxime esse doloribus animi harum?',
    },
    {
      title: 'Another Cool Post',
      image: 'https://picsum.photos/400',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui aliquid reprehenderit fugit tempora. Ullam quos corporis quasi nulla modi commodi ut! Deleniti, distinctio delectus maxime esse doloribus animi harum?',
    },
    {
      title: 'Tell Me More About This Post',
      image: 'https://picsum.photos/400',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui aliquid reprehenderit fugit tempora. Ullam quos corporis quasi nulla modi commodi ut! Deleniti, distinctio delectus maxime esse doloribus animi harum?',
    }
  ];
  return (
    <>
      <Header />
      <div className='container mx-auto flex justify-between items-center py-10 flex-col lg:flex-row px-10 lg:px-0 pt-0'>
        <div className='w-full lg:w-9/12 mr-10 order-2 lg:order-1 mt-16'>
          <h1 className='text-6xl font-black leading-[80px] tracking-wide mb-8'>Hi! My name is<br />Jonathon</h1>
          <p className='text-2xl leading-normal'>I am a father, a husband and a web developer with over 10 years of experience. I have been fortunate enough to work across many insustries including fitness/nutrition, finance and most recently Web3. I plan on using this as a personal website to showcase my work, write general blog posts as well as tech related tutorials.</p>
          <p className='mt-5 mb-2'>Find me at:</p>
          <ul className='flex gap-3 mb-8'>
            <li><a href="https://www.linkedin.com/in/jonathonhammond/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt="LinkedIn" /></a></li>
            <li><a href="https://twitter.com/real_2n10se" target="_blank" rel="noreferrer"><img src={TwitterIcon} alt="Twitter" /></a></li>
            <li><a href="https://github.com/jhammond2012" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github" /></a></li>
            <li><a href="https://dribbble.com/jonathonhammond" target="_blank" rel="noreferrer"><img src={DribbbleIcon} alt="Dribble" /></a></li>
          </ul>
        </div>
        <div className='order-1 lg:order-2'>
          <div className='relative'>
            <img src={HarrisonAndJonathon} alt="Jonathon and Harrison" className='rounded-2xl relative z-20' />
            <div className='absolute rounded-2xl bg-[#293D5B] w-full h-full -left-5 top-5 z-10' />
          </div>
        </div>
      </div>

      <div className='bg-[#293D5B] py-20'>
        <div className="container mx-auto">
          <div className='bg-white rounded-xl py-16 px-28'>
            <h2 className='text-5xl font-bold text-center mb-10'>Latest Posts</h2>
            <div className='bg-slate-800 text-white py-2 px-4 rounded-lg text-center mb-10'>Coming Soon</div>
            {/* <div className='flex flex-col gap-8'>
              {posts.map((post, index) => (
                <div className='flex' key={index}>
                  <div className='mr-4'>
                    <img src={post.image} alt="Holder" />
                  </div>
                  
                  <div>
                    <h3 className='font-bold text-lg mb-1 mt-0'>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <button className='transition-all ease-in-out bg-yellow-300 hover:bg-yellow-500 px-5 py-3 mt-2 rounded-md text-white font-bold'>Read More</button>
                  </div>
                </div>
              ))}
            </div> */}
            <h2 className='text-5xl font-bold text-center mb-10'>My Projects</h2>
            <div className='bg-slate-800 text-white py-2 px-4 rounded-lg text-center mb-10'>Coming Soon</div>

            <h2 className='text-5xl font-bold text-center mb-10'>More About Me</h2>
            <div className='bg-slate-800 text-white py-2 px-4 rounded-lg text-center mb-10'>Coming Soon</div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home