import React from 'react';
import me from '../images/me.jpg';
import {AiFillGithub} from 'react-icons/ai';

function Home() {
  return (
    <div className='flex flex-col items-center mx-auto min-h-screen w-screen max-w-screen-xl font-sans py-20'>
      <div className="w-3/4 flex flex-col items-center justify-center">
        <div className="mb-4 px-4 flex md:justify-start">
          <img className="rounded-3xl transition-all ease-linear max-w-full mt-2 mb-2" src={me} alt="me" width={300} height={300} />
        </div>
        <h1 className="font-bold text-4xl mb-2 hover:scale-105 transition-all ease-linear">
          <button><div className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center rounded-md px-3 py-1 leading- bg-secondary/10 text-secondary">Tanner Bronson</div></button>
        </h1>
        <h2 className="text-2xl flex">Computer Science at University of Alberta</h2>
      </div>
      <main className="mx-auto items-center pt-12 w-3/6 lg:pt-10">
        <h2 className="text-lg flex">
          I'm a software developer with experience building multiple user-driven interactive bots which gained
          stable user bases in multiple online communities and designed websites for other gaming communities to interact
          with each other.
        </h2>
      </main>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-6">
          
        </li>
      </ul>
    </div>
  );
}

export default Home;