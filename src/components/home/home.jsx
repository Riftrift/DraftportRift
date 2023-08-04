import "./home.css";
import Me from "../../assets/riffkub.jpg";
import HeaderSocials from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img"></img>
        <h1 className="home__name">Riff Khalis</h1>
        <span className="home__education">
          I am a passionate front-end developer, honing my skills at Tech Up
          Bootcamp, crafting digital experiences that blend creativity and code.
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Open to Job Offers
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default home;
