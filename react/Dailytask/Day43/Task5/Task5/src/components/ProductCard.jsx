const ProductCard=({ name, price })=> {

  return (
  <>
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">

      <h2 className="text-xl font-bold text-blue-700 mb-3">
        {name}
      </h2>

      <p className="text-gray-700 font-semibold">
        Price: ₹{price}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
        Buy Now
      </button>

    </div>
  
  
  
  </>
  );
}

export default ProductCard;