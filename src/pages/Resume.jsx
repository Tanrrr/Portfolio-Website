import React from 'react';
import resumepdf from '../images/resume.pdf';

function Resume() {
    return (
      <div className='flex flex-col items-center mx-auto min-h-screen w-screen max-w-screen-xl font-sans max-sm:py-20 sm:py-10'>
        <div aria-label='paper' className="w-2/3 h-full">
          <h1 className="text-4xl font-bold">Tanner Bronson</h1>
          <h2 className=" mb-1">Software Developer | <a href={resumepdf} className="text-blue-900">PDF Version of Resume</a></h2>
          <h2>Edmonton, Alberta (Open to Remote) | +1 (780-966-0954) | <a href='mailto:tanrrrbronson@gmail.com' className="text-blue-900">tanrrrbronson@gmail.com</a></h2>
          <h2 className="my-2 font-bold text-lg">EDUCATION</h2>
          <hr className="bg-black my-1"/>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">University of Alberta - Computer Science</h2>
            <h2 className="font-bold ml-auto">Apr 2025</h2>
          </div>
          <h2 className="my-2 font-bold text-lg">SKILLS</h2>
          <hr className="bg-black my-1"/>
          <div className="ml-4">
            <div className="flex my-1">
              <h2 className="font-bold">Coding Languages </h2>
              <h2 className="ml-5">JavaScript, TypeScript, Python, Java, HTML, C</h2>
            </div>
            <div className="flex my-1">
              <h2 className="font-bold">Frameworks</h2>
              <h2 className="ml-16">React, Node.js, Yarn, NEXT.JS, CSS, Selenium, NumPy, REST API</h2>
            </div>
            <div className="flex my-1">
              <h2 className="font-bold">Databases & Tools</h2>
              <h2 className="ml-5">MySQL, SQLite3, Git, Unix, Firebase</h2>
            </div>
          </div>
          <h2 className="my-2 font-bold text-lg">PERSONAL PROJECTS</h2>
          <hr className="bg-black my-1"/>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Portfolio Website – JavaScript, React, Tailwind</h2>
            <h2 className="font-bold ml-auto">Sep 2023 – Present</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Developed a simple frontend portfolio website using React, Tailwind, and JavaScript to showcase my skills and projects.
            </li>
            <li>
            Used Tailwind to create a responsive and mobile-friendly website that is easy to navigate and visually appealing.
            </li>
            <li>
            Used multiple React components to implements features such as a expanding sidebar allowing for easy navigation between pages.
            </li>
          </ul>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Café Communicator – TypeScript, React, Firebase, HTML, CSS</h2>
            <h2 className="font-bold ml-auto">Dec 2022 – Jan 2023</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Built a web application using React, JavaScript, HTML, and CSS that allowed users to message each other in real-time.
            </li>
            <li>Leveraged Google Firebase to
              enable user account creation, profile customization, and real-time messaging functionality.</li>
            <li>
            Stored all messages in a Firebase database for easy retrieval and future use.
            </li>
          </ul>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Kana Bot – Python, MySQL, discord.py</h2>
            <h2 className="font-bold ml-auto">Mar 2021 – May 2022</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Developed a Discord bot using the discord.py library, which enabled users to create profiles and
              store currency through a MySQL database.  
            </li>
            <li>
            Implemented features that allowed users to trade
              and gamble currency for in-game items.
            </li>
            <li>
            The bot was successfully deployed on multiple Discord
              servers and had an active userbase of 100+ individuals interacting with it concurrently
            </li>
          </ul>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold mr-4">Game Update Notifier – Selenium, Python, MySQL</h2>
            <h2 className="font-bold ml-auto">Nov 2021 – Mar 2022</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Created a web scraper using Selenium, Python, and MySQL that checked a popular game’s
              community Discord server for updates.  
            </li>
            <li>
            Developed a Discord bot that utilized a backend MySQL
              check to notify players who had signed up for update alerts.
            </li>
            <li>
            Achieved successful
              communication and notification of players, enabling them to stay up to date with the latest
              game updates.
            </li>
          </ul>
          <h2 className="my-2 font-bold text-lg">WORK EXPERIENCE</h2>
          <hr className="bg-black my-1"/>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Floor Manager, Rick Bronson’s The Comic Strip </h2>
            <h2 className="font-bold ml-auto">Feb 2022 – Present</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>Coordinated seating arrangements for up to 300 guests to maximize efficiency and guest experience.</li>
            <li>Served food and drinks to guests quickly and accurately during the show</li>
            <li>Responded promptly to operational needs and requirements during shows to ensure smooth and efficient operations.</li>
            <li>Collaborated with the team to deliver a seamless and memorable guest experience.</li>
          </ul>
        </div>
      </div>
    );
}

export default Resume;