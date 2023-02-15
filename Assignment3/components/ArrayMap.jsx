import products from "../utils/products";
const ArrayMap = () => {
  // by using filter
  // const productName = products.filter((name) => name.name).map((name) => name.name)

  // by using only map
  // const productName = products.map((name) => name.name)

  // by using object destructiring
  // return <div className="text-center py-20 bg-yellow-200"><p className="text-xl text-teal-400 font-bold">Inventory:</p>{products.map(({name}) => <p>{name}</p>)}</div>

  return (
    <div className="text-center py-20 bg-yellow-200">
      <p className="text-xl text-teal-400 font-bold">Inventory:</p>
      {products.map((name) => (
        <p key={name}>{name.name}</p>
      ))}
    </div>
  );
};

export default ArrayMap;
