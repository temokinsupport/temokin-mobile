import React, { useRef, useState, useEffect } from 'react';
import useLocoScroll from '../components/hooks/useLocoScroll';
import '../assets/styles/civilengineering.scss';
import Header from '../components/CivilEngineer/Header';
import Desc from '../components/CivilEngineer/Desc';
import Projects from '../components/CivilEngineer/Projects';
import ProjectIcon from '../components/CivilEngineer/ProjectIcon';


const CivilEngineering = () => {

  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
      window.clearInterval(id.current);
      setPreloader(false);
  };

  useEffect(() => {
      id.current = window.setInterval(()=>{
          setTimer((timer) => timer - 1 );
      }, 1000);
  }, []);


  useEffect(() => {
      if (timer === 0) {
          clear();
      }
  }, [timer]);

  return (
    <>
      {
        <div className="--civil-engineering 
          main-container"
          id="main-container"
          data-scroll-container
        >
          <Header/>
          <Desc/>
          <Projects/>
          <ProjectIcon/>
        </div>
      }
    </>
  );
}

export default CivilEngineering;
