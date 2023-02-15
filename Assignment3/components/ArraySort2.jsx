

import { useState, useEffect } from "react";
import products from "../utils/products";

const ArraySort2 = () => {


    // const products = [
    //     { id: 1, name: 'Apple iPhone', price: 999, onSale: false },
    //     { id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true },
    //     { id: 3, name: 'Google Pixel 5', price: 699, onSale: false },
    //     { id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true },
    //     { id: 5, name: 'AirPods Pro', price: 249, onSale: false },
    //     ];

    products.sort((a,b)=>a.price-b.price)
        

    const [numbers, setNumbers] = useState([]);
  //  console.log(numbers);
  const [direction, setDirection] = useState('desc');
  // useEffect listens for changes and fires when a change happen

    useEffect(() => {
      sortNumbers();
    // it will fire when [] will change, in this case when component mounts 
  }, [])

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
    if (direction === 'desc'){
        sortedNumbers.sort((a,b)=>a.price-b.price);
        setDirection('asc');
    } else {
        sortedNumbers.sort((a,b)=>b.price-a.price);
        setDirection('desc');
    }
    // and setting back array to variable
    setNumbers(sortedNumbers);
  };
  
//   const arr = [1,2,3,45,65,5,];
//   const arrSort=arr.sort((a,b)=>a-b);

    return <div>
        <p className="py-10 mx-10 text-2xl bg-blue-400">Prices:  {numbers.join(', ')}</p>
        
        <button onClick={sortNumbers} className="border-solid border-2 border-indigo-600 my-3 mx-10 text-2xl p-4 rounded-xl bg-indigo-300">Sort</button> 
    </div>


    
}

export default ArraySort2;




//import { useState, useEffect } from "react";

// const ArraySort = () => {

//     const [numbers, setNumbers] = useState([5,2,7,1,4,9,3,6]);
//   //  console.log(numbers);
//   const [direction, setDirection] = useState('asc');
//   // useEffect listens for changes and fires when a change happen
//     useEffect(() => {
//       sortNumbers();
//     // it will fire when [] will change, in this case when component mounts 
//   }, [])

//   const sortNumbers = () => {
//     /// it will resort the numbers
//     // take the numbers variable and sort them desc if current direction is asc and vice versa
//     // change direction to desc if it was asc and vice versa
//     //and set sorted array, back into the numbers variable

//     // the only way to update numbers is by calling setNumbers function and assign value that we want numbers to have
//     // we can not override numbers like  numbers = numbers.sort(); or sat value to it, it only can be done throught setNumbers
    
//     // we have to make copy of array by using spread operator
//     const sortedNumbers = [...numbers];
//     // now i can do anything with sortedNumbers and it won't affect numbers variable

//     // checking direction & changing (sorting) array
//     if (direction === 'asc'){
//         sortedNumbers.sort((a,b)=>b-a);
//         setDirection('desc');
//     } else {
//         sortedNumbers.sort((a,b)=>a-b);
//         setDirection('asc');
//     }
//     // and setting back array to variable
//     setNumbers(sortedNumbers);
//   };
  
// //   const arr = [1,2,3,45,65,5,];
// //   const arrSort=arr.sort((a,b)=>a-b);

//     return <div>
//         <p>Numbers:  {numbers.join(', ')}</p>
//         <button onClick={sortNumbers}>ReSort</button> <small>{direction}</small>
//     </div>
