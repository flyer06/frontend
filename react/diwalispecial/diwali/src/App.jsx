import Navbar from "./components/Navbar";
import { useState } from "react";

const App=()=> {

  const celebrations = [
    {
      title: "Lighting Diyas",
      image: "https://images.unsplash.com/photo-1606293926075-69a00db26b2d?w=800",
      description: "Light up your home with beautiful diyas."
    },
    {
      title: "Fireworks",
      image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=800",
      description: "Celebrate with sparkling lights."
    },
    {
      title: "Sharing Sweets",
      image: "https://images.unsplash.com/photo-1605197161470-5d9e3f6c1c1d?w=800",
      description: "Share sweets with family and friends."
    },
    {
      title: "Home Decoration",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800",
      description: "Decorate your home beautifully."
    }
  ];
const [selectedImage, setSelectedImage] = useState(null);
  return (
   <>
    <div className="min-h-screen bg-orange-50 text-orange-950">

      <Navbar />

  
      <section id="home" className="min-h-screen bg-gradient-to-r from-orange-500 to-red-800 text-white flex flex-col justify-center items-center text-center p-6">

        <h1 className="text-5xl font-bold mb-5">
          ✨ Happy Diwali ✨
        </h1>

        <h2 className="text-3xl mb-5">Festival of Lights</h2>

        <p className="text-xl">
          May your life shine with happiness and prosperity!
        </p>

        <p className="text-6xl mt-8">🪔 🎆 🪔</p>

      </section>

  
      <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-yellow-100">

        <h1 className="text-4xl font-bold mb-6">
          About Diwali
        </h1>

        <p className="text-xl max-w-2xl">
          Diwali is one of India's most celebrated festivals.
          It represents the victory of light over darkness
          and good over evil.
        </p>

        <p className="text-6xl mt-8">🪔</p>

      </section>

 <section id="celebration" className="min-h-screen bg-orange-100 py-20 px-6">

  <h1 className="text-4xl font-bold text-center mb-12 text-red-900">
    🎉 Diwali Celebrations 🎉
  </h1>

  <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

    <button onClick={() => window.open("/assets/Image/1.jpg", "_blank")}
      className="bg-red-900 text-white p-8 rounded-xl">
      🪔 Lighting Diyas
    </button>

    <button onClick={() => window.open("/assets/Image/2.jpeg", "_blank")}
      className="bg-red-900 text-white p-8 rounded-xl">
      🎆 Fireworks
    </button>

    <button onClick={() => window.open("/assets/Image/3.jpeg", "_blank")}
      className="bg-red-900 text-white p-8 rounded-xl">
      🍬 Sharing Sweets
    </button>

    <button onClick={() => window.open("/assets/Image/4.jpg", "_blank")}
      className="bg-red-900 text-white p-8 rounded-xl">
      🌸 Diwali Special
    </button>

  </div>
</section>

    
      <section id="contact" className="min-h-screen bg-red-900 text-white flex flex-col justify-center items-center text-center p-8">

        <h1 className="text-4xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-xl">
          HAPPY DIWALI MAKKA IPPADIKKU ANBU ULLA NAANTHAN
        </p>

        <p className="text-3xl mt-5">
          ❤️ Happy Diwali ❤️
        </p>

      </section>

    
      <footer className="bg-black text-white text-center p-5">
        © 2026 Diwali Celebration Website
      </footer>

    </div>
   </>
  );
}

export default App;