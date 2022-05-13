const Footer = () => {
  const scrollHome = () => {
    const home = document.querySelector("html");
    home.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer">
      <p>Ronald Karamuca, 2022 <button onClick={ scrollHome }>(<em>back to top</em>)</button></p>
    </div>
  );
}
 
export default Footer;