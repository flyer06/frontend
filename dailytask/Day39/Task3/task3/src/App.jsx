import ProductCard from "./components/ProductCard";

const App=()=>{
  return (
    <div>
      <h1>Product List</h1>

      <ProductCard
        name="Laptop"
        price={50000}
        category="Electronics"
        availability="In Stock"
      />

      <ProductCard
        name="Mobile"
        price={20000}
        category="Electronics"
        availability="In Stock"
      />

      <ProductCard
        name="Shoes"
        price={1500}
        category="Fashion"
        availability="Out of Stock"
      />
    </div>
  );
}

export default App;