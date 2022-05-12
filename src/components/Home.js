import Avatar from '../images/avatar.png';
import Arrow from '../images/arrow.png';

const Home = () => {
  const scroll = () => {
    const about = document.querySelector(".about-container");
    about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <h1>Software Engineer and Full-Time Learner</h1>
      <p>I design, write, and maintain code, and I love doing it.</p>
      <img src={ Avatar } alt="Avatar icon" id="avatar" />
      <button onClick={ scroll }>
        <div className="scroll-action">
          <img src={ Arrow } alt="Icon of an arrow" id="arrow" />
          <h2>Learn More!</h2>
        </div>
      </button>
    </div>
  );
}
 
export default Home;