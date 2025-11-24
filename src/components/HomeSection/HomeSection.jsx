import "./HomeSection.css";
import bannerImage from "../../assets/images/Banner.png";

const HomeSection = () => {
  return (
    <section id="home-container">
      <img src={bannerImage} alt="Banner da página" className="home-image" />
    </section>
  );
};
export default HomeSection;
