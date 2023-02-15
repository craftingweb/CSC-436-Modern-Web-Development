import products from "../utils/products";

const ArrayFilter = () => {
  return (
    <ol className="text-center py-20 h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <p className="text-xl text-red-700">Currently on SALE:</p>
      {products
        .filter(({ onSale }) => onSale === true)
        .map(({ onSale, name }) => (
          <li key={onSale}> {name}</li>
        ))}
    </ol>
  );
};

export default ArrayFilter;
