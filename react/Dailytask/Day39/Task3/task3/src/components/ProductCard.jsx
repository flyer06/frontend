const ProductCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <p>Category: {props.category}</p>
      <p>Availability: {props.availability}</p>
    </div>
  );
};

export default ProductCard;