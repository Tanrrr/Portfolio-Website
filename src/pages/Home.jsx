import React from 'react';
import me from '../images/me.jpg';

function Home() {
  return (
    <div className="flex flex-col w-96 h-screen mx-auto items-center">
      <img className="rounded-3xl transition-all ease-linear scale-150 mt-16 mb-16" src={me} alt="me" />
      <h1 className="font-bold text-4xl mb-2 hover:scale-105 transition-all ease-linear">
        <button><div className="flex items-center rounded-md px-3 py-1 font-medium leading- bg-secondary/10 text-secondary">Tanner Bronson</div></button>
      </h1>
      <h2 className="text-2xl flex items-center">I'm a Computer Science student at the University of Alberta</h2>
      <h2 className="text-lg flex items-center">
        I'm a self-taught software developer with experience building multiple user-driven interactive bots which gained
        stable user bases in multiple online communities and designed websites for other gaming communities to interact
        with each other.
      </h2>
    </div>
  );
}

export default Home;
