import React from 'react';
import resumepdf from '../images/resume.pdf';

function Resume() {
  // Your component code
    return (
      <div className='flex flex-col items-center mx-auto min-h-screen w-screen max-w-screen-xl font-sans max-sm:py-20 sm:py-5'>
        <div aria-label='paper' className="w-2/3 h-full">
          <h1 className="text-4xl font-bold">Tanner Bronson</h1>
          <h2 className=" mb-1">Software Engineer | <a href={resumepdf}>PDF Version of Resume</a></h2>
          <h2>Edmonton, Alberta (Open to Remote) | +1 (780-966-0954) | <a href='mailto:tanrrrbronson@gmail.com'>tanrrrbronson@gmail.com</a></h2>
          <h2 className="my-2 font-bold text-lg">EDUCATION</h2>
          <hr className="bg-black my-1"/>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Grant Macewan University - Computer Science</h2>
            <h2 className="font-bold ml-auto">Sep 2021—Apr 2023</h2>
          </div>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">University of Alberta - Computer Science</h2>
            <h2 className="font-bold ml-auto">Sep 2023—Apr 2025</h2>
          </div>
          <h2 className="my-2 font-bold text-lg">SKILLS</h2>
          <hr className="bg-black my-1"/>
          <div className="ml-4">
            <div className="flex my-1">
              <h2 className="font-bold">Coding Languages </h2>
              <h2 className="ml-5">JavaScript, TypeScript, Python, Java, HTML, CSS</h2>
            </div>
            <div className="flex my-1">
              <h2 className="font-bold">Frameworks</h2>
              <h2 className="ml-16">React, Node.js, Yarn</h2>
            </div>
            <div className="flex my-1">
              <h2 className="font-bold">Databases & Tools  </h2>
              <h2 className="ml-5">MySQL, SQLite3, Git</h2>
            </div>
          </div>
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
          <h2 className="my-2 font-bold text-lg">PERSONAL PROJECTS</h2>
          <hr className="bg-black my-1"/>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Kana Bot – Python, MySQL</h2>
            <h2 className="font-bold ml-auto">Mar 2021 – May 2022</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Developed a Discord bot using the discord.py library, which enabled users to create profiles and
              store currency through a MySQL database. Implemented features that allowed users to trade
              and gamble currency for in-game items. The bot was successfully deployed on multiple Discord
              servers and had an active userbase of 100+ individuals interacting with it concurrently.
            </li>
          </ul>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold">Café Communicator – JavaScript, React, Firebase, HTML, CSS</h2>
            <h2 className="font-bold ml-auto">Dec 2022 – Jan 2023</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Built a React-based chat application, Café Communicator, tat leveraged Google Firebase to
              enable user account creation, profile customization, and real-time messaging functionality.
              Stored all messages in a Firebase database for easy retrieval and future use.
            </li>
          </ul>
          <div className="flex my-1 ml-4">
            <h2 className="font-bold mr-4">Roblox Game Update Notifier -- Selenium, Python, MySQL</h2>
            <h2 className="font-bold ml-auto">Nov 2021 – Mar 2022</h2>
          </div>
          <ul className="my-1 ml-12 list-disc">
            <li>
              Created a web scraper using Selenium, Python, and MySQL that checked a popular game’s
              community Discord server for updates. Developed a Discord bot that utilized a backend MySQL
              check to notify players who had signed up for update alerts. Achieved successful
              communication and notification of players, enabling them to stay up to date with the latest
              game updates.
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Resume;