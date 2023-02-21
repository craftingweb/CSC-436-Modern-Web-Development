import products from "../utils/products";

const ArrayReduce = () => {
  const priceTotal = products.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  return (
    <div>
      <p className="text-center text-2xl font-extrabold text-purple-600 py-20 h-14 bg-gradient-to-r from-purple-500 to-pink-500">
        Total price is ${priceTotal}
      </p>
    </div>
  );
};

export default ArrayReduce;
