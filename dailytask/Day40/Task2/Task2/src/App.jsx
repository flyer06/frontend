import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";
import "./App.css";
import ProductHero from "./components/Producthero";

const App=()=> {
  return (
    <>
      <Header />
      <ProductHero/>
      <ProductInfo />
      <Footer />
    </>
  );
}

export default App;