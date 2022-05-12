import Avatar from '../images/avatar.png';
import Arrow from '../images/arrow.png';

const Home = () => {
  return (
    <div className="home">
      <h1>Software Engineer and Full-Time Learner</h1>
      <p>I design, write, and maintain code, and I love doing it.</p>
      <img src={ Avatar } alt="Avatar icon" id="avatar" />
      <a href="#">
        <div className="scroll-action">
          <img src={ Arrow } alt="Icon of an arrow" id="arrow" />
          <h2>Learn More!</h2>
        </div>
      </a>
    </div>
  );
}
 
export default Home;