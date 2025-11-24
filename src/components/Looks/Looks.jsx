import "./Looks.css";
import "/src/assets/images/look1.png";
import "/src/assets/images/look2.png";
import "/src/assets/images/look3.png";
import "/src/assets/images/look4.png";

const Looks = () => {
  return (
    <section id="looks-container">
      <h1>LOOKS E DICAS DE MAQUIAGEM</h1>

      <div className="looks-gallery">
        <div className="look-item">
          <img src="src/assets/images/look1.png" alt="Look 1" />
        </div>
        <div className="look-item">
          <img src="src/assets/images/look2.png" alt="Look 2" />
        </div>
        <div className="look-item">
          <img src="src/assets/images/look3.png" alt="Look 3" />
        </div>
        <div className="look-item">
          <img src="src/assets/images/look4.png" alt="Look 4" />
        </div>
      </div>
    </section>
  );
};
export default Looks;
