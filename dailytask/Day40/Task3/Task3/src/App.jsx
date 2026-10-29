
import RestaurantHero from "./components/RestaurantHero";
import MenuPreview from "./components/MenuPreview";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar/>
      <RestaurantHero />
      <MenuPreview />
      <Footer />
    </>
  );
}

export default App;