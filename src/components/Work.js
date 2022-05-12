import Project from "./Project";
import PG from "../images/photo-gallery.png";
import Alumni from "../images/alumni-map.png";
import Nim from "../images/nim.png";

const Work = () => {
  return (
    <div className="work">
      <h2>Featured Projects</h2>
      <div className="features">
        <Project url="https://rkaramuca.github.io/photo-gallery/" location={ PG } alt="Photo Gallery project" title="Zen Photo Gallery" description="React app that displays a zen quote and a 3xN gallery of plant photos." />
        <Project url="https://github.com/rkaramuca/AlumniMap/" location={ Alumni } alt="Alumni Map project" title="Alumni Mapper" description="MEAN app that maps alumni location and information. Currently a work-in-progress." />
        <Project url="https://replit.com/@ReconCoding/Nim-Bot/" location={ Nim } alt="Nim project" title="Nim Bot" description="Python AI project that beats you at the game of Nim." />
      </div>
    </div>
  );
}
 
export default Work;