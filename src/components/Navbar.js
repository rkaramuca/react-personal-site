import logo from '../images/logo_200.jpg';

const Navbar = () => {
  const scrollHome = () => {
    const home = document.querySelector("html");
    home.scrollIntoView({ behavior: "smooth" });
  };
  const scrollAbout = () => {
    const about = document.querySelector(".about");
    about.scrollIntoView({ behavior: "smooth" });
  };
  const scrollWork = () => {
    const work = document.querySelector(".work");
    work.scrollIntoView({ behavior: "smooth" });
  };
  const scrollContact = () => {
    const contact = document.querySelector(".contact");
    contact.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <ul className="navbar">
      <li><button onClick={ scrollContact }>Contact</button></li>
      <li><button onClick={ scrollWork }>Work</button></li>
      <li><button onClick={ scrollAbout }>About</button></li>
      <button onClick={ scrollHome }><img src={ logo } alt="Logo" /></button>
    </ul>
    
  );
}
 
export default Navbar;