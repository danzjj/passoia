import "./Looks.css";
import look1 from "../../assets/images/look1.png";
import look2 from "../../assets/images/look2.png";
import look3 from "../../assets/images/look3.png";
import look4 from "../../assets/images/look4.png";

const Looks = () => {
  return (
    <section id="looks-container">
      <h1>LOOKS E DICAS DE MAQUIAGEM</h1>

      <div className="looks-gallery">
        <div className="look-item">
          <img src={look1} alt="Look 1" />
        </div>
        <div className="look-item">
          <img src={look2} alt="Look 2" />
        </div>
        <div className="look-item">
          <img src={look3} alt="Look 3" />
        </div>
        <div className="look-item">
          <img src={look4} alt="Look 4" />
        </div>
      </div>
    </section>
  );
};
export default Looks;
