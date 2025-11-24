import "./HomeSection.css";
import bannerImage from "../assets/images/passoia_logo.png";

const HomeSection = () => {
  return (
    <section id="home-container">
      <img src={bannerImage} alt="Banner da página" className="home-image" />
    </section>
  );
};
export default HomeSection;
