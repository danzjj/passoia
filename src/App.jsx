import Header from "./components/Header/Header";
import "./styles/reset.css";
import HomeSection from "./components/HomeSection/HomeSection";
import Looks from "./components/Looks/Looks";
import Lancamentos from "./components/Lancamentos/Lancamentos";

function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <Looks />
      <Lancamentos />
    </>
  );
}

export default App;
