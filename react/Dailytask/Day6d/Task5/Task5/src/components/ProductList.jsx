import ProductCard from "./ProductCard";

const ProductList=({ products }) =>{

  return (
   <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />

      ))}

    </div>
    </>
  );
   
   
}

export default ProductList;