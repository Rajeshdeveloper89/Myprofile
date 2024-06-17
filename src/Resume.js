// src/Resume.js

import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

const Header = () => (
  <header className="resume-header">
    <h1>Rajesh Velagapudi</h1>
    <h2>IT Analyst | DevOps Engineer</h2>
    <p>rajeshvelagapudi@maddocks.com.au | (+61) 457852882 | linkedin.com/in/rajeshvelagapudi</p>
  </header>
);

const Profile = () => (
  <section className="resume-profile">
    <h2>Profile</h2>
    <p>
    Experienced IT professional with over 2 years of industry experience, including 1 year as an ICT Support Specialist at the University, followed by roles as a Deployment Technician and currently serving as a Level 2 EUC Engineer. Demonstrated expertise in providing comprehensive technical support, troubleshooting, and resolving issues efficiently. Proficient in various operating systems, Active Directory management, and software deployment using SCCM. Proven track record of delivering exceptional customer service, collaborating cross-functionally, and ensuring seamless IT operations. Strong problem-solving skills, adaptability to evolving technologies, and a dedication to optimizing user productivity and satisfaction.
    </p>
  </section>
);

const Experience = () => (
  <section className="resume-experience">
    <h2>Experience</h2>
    <div className="job">
      <h3>IT suppor Analyst</h3>
      <h4>Maddocks, June 2023 - Present</h4>
      <ul>
        <li>Developed and maintained web applications using React and Node.js.</li>
        <li>Collaborated with designers to create user-friendly interfaces.</li>
        <li>Implemented RESTful APIs and integrated third-party services.</li>
      </ul>
    </div>
    <div className="job">
      <h3>EUC Engineer</h3>
      <h4>Inpex, Jan 2022 - Jun 2023</h4>
      <ul>
        <li>Created responsive web pages using HTML, CSS, and JavaScript.</li>
        <li>Worked with the team to enhance the user experience.</li>
        <li>Participated in code reviews and provided feedback to peers.</li>
      </ul>
    </div>
  </section>
);

const Education = () => (
  <section className="resume-education">
    <h2>Education</h2>
    <div className="school">
      <h3>Bachelor of Computer Science</h3>
      <h4>JNTU, 2014 - 2018</h4>
    </div>
  </section>
);

const Skills = () => (
  <section className="resume-skills">
    <h2>Skills</h2>
    <ul>
      <li>Vagrant</li>
      <li>AD, SCCM</li>
      <li>Node.js</li>
      <li>HTML & CSS</li>
      <li>Git</li>
      <li>Jenkins</li>
    </ul>
  </section>
);

export default Resume;
