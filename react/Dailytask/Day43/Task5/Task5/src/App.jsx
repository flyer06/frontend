import ProductList from "./components/ProductList";

const App=()=> {

  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 800 }
  ];

  return (
   <>
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Product Store
        </h1>

        <ProductList products={products} />

      </div>

    </div>
   
   
   
   </>
  );
}

export default App;