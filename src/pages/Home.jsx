import React from 'react';
import me from '../images/me.jpg';

function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className="lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div className="mb-4 px-4 flex justify-center items-start md:justify-start">
        <img className="rounded-3xl transition-all ease-linear mt-2 mb-2" src={me} alt="me" width={300} height={300} />
        </div>
      <h1 className="font-bold text-4xl mb-2 hover:scale-105 transition-all ease-linear">
        <button><div className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center rounded-md px-3 py-1 leading- bg-secondary/10 text-secondary">Tanner Bronson</div></button>
      </h1>
      <h2 className="text-2xl flex items-center">I'm a Computer Science student at the University of Alberta</h2>
    </div>
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <h2 className="text-lg flex items-center">
        I'm a software developer with experience building multiple user-driven interactive bots which gained
        stable user bases in multiple online communities and designed websites for other gaming communities to interact
        with each other.
      </h2>
    </main>
    </div>
  );
}

export default Home;
