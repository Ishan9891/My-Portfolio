import './home.css';
import img from '../props/profileImage.jpeg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
         I'm a Fullstack developer at WIPRO, where I help customize our
         codebase to fit new client needs. Advocating for diversity and inclusion is something that's very important to me, 
         and thankfully I've found a workplace that helps support that mission.<br></br><br></br>
         Currently I'm using Reactjs for front end development and ASP.Net Core for backend development.
         Here I conduct client product demonstration for every module. Complete ownership of the web
         application from analysis to complete development and deployment. <br></br><br></br>
         Developed 2 retirement planner web applications (Sobeys Inc, Canada and Online Pension Board,
         Canada) 
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
