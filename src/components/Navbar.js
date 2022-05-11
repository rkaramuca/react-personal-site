import logo from '../images/logo_200.jpg';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li><a href="#">Contact</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <a href="#"><img src={ logo } alt="Logo" /></a>
    </ul>
    
  );
}
 
export default Navbar;