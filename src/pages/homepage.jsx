import React from 'react';

const HeroSection = () => {

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sanskar-suryavanshi-415366200/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/yourusername', '_blank');
  };

  const handleContactClick = () => {
    window.open('mailto:ssuryavanshi0001@gmail.com', '_blank');
  };

  return (
    <div className="bg-primary_back text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Top Buttons */}
      <div className="flex gap-64 absolute top-8 space-x-24">
        <a href={"https://www.linkedin.com/in/sanskar-suryavanshi-415366200/"}><button className="bg-primary text-black font-athelas py-2 px-8 rounded-3xl hover:bg-yellow-500 transition duration-200" onSubmit={handleLinkedInClick} >
          LinkedIn
        </button></a>
        <a href={"https://github.com/00suryavanshi00"}><button className="bg-primary text-black font-athelas py-2 px-8 rounded-3xl hover:bg-yellow-500 transition duration-200" onSubmit={handleLinkedInClick} >
          Github
        </button></a>
        <a href={"mailto:ssuryavanshi0001@gmail.com"}><button className="bg-primary text-black font-athelas py-2 px-8 rounded-3xl hover:bg-yellow-500 transition duration-200" onSubmit={handleLinkedInClick} >
          Contact Me
        </button></a>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center gap-12 mt-20 mr-40">
        {/* Text Section */}
        <div className="z-10">
          <h2 className="text-xl mb-20">Full Stack Developer</h2>
          <h1 className="text-7xl font-athelas text-primary mb-4">Hello, I Am</h1>
          <h1 className="text-8xl font-athelas text-primary mb-6">Sanskar Suryavanshi</h1>
         
        </div>
        

        {/* Image Section */}
        <div className="overflow-hidden absolute z-0 bottom-30 right-64 h-auto w-1/4">
          <img
            src="dp.svg" // Replace with your image path
            alt="Sanskar Suryavanshi"
            className="object-cover"
          />
        </div>
      </div>


      <p className="text-lg leading-relaxed absolute bottom-10 left-10 italic">
  "I try new tech stacks every now and then<br />
  to{' '}<span className="text-primary">experience</span>{' '}
  <span>the</span>{' '}<span className="text-primary">innovation</span><br/>
  fellow devs work so hard on.""
      </p>
    </div>
  );
};

export default HeroSection;
