import { useState, useEffect } from "react";
import products from "../utils/products";

const ArraySort = () => {
  const [numbers, setNumbers] = useState(products.map((item) => item.price));
  //  console.log(numbers);
  const [direction, setDirection] = useState("desc");
  // useEffect listens for changes and fires when a change happen

  useEffect(() => {
    sortNumbers();
    // it will fire when [] will change, in this case when component mounts
  }, []);

  const sortNumbers = () => {
    /// it will resort the numbers
    // take the numbers variable and sort them desc if current direction is asc and vice versa
    // change direction to desc if it was asc and vice versa
    //and set sorted array, back into the numbers variable

    // the only way to update numbers is by calling setNumbers function and assign value that we want numbers to have
    // we can not override numbers like  numbers = numbers.sort(); or sat value to it, it only can be done throught setNumbers

    // we have to make copy of array by using spread operator
    const sortedNumbers = [...numbers];
    // now i can do anything with sortedNumbers and it won't affect numbers variable

    // checking direction & changing (sorting) array
    if (direction === "desc") {
      sortedNumbers.sort((a, b) => a - b);
      setDirection("asc");
    } else {
      sortedNumbers.sort((a, b) => b - a);
      setDirection("desc");
    }
    // and setting back array to variable
    setNumbers(sortedNumbers);
  };

  //   const arr = [1,2,3,45,65,5,];
  //   const arrSort=arr.sort((a,b)=>a-b);

  return (
    <div>
      <p className="py-10 mx-10 text-2xl bg-blue-400">
        Prices: {numbers.join(", ")}
      </p>

      <button
        onClick={sortNumbers}
        className="border-solid border-2 border-indigo-600 my-3 mx-10 text-2xl p-4 rounded-xl bg-indigo-300"
      >
        Sort
      </button>
    </div>
  );
};

export default ArraySort;
