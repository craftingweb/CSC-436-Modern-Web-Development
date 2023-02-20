import React from "react";
import { useState } from "react";
import ArrayFilter from "./components/arrayFilter";
import ArrayMap from "./components/arrayMap";
import ArrayReduce from "./components/arrayReduce";
import ArraySort from "./components/arraySort";

function App() {
  const [componentToShow, setComponentToShow] = useState("");

  const arrayReduceHandler = () => {
    setComponentToShow("reduce");
  };

  const arrayMapHandler = () => {
    setComponentToShow("map");
  };

  const arraySortHandler = () => {
    setComponentToShow("sort");
  };

  const arrayFilterHandler = () => {
    setComponentToShow("filter");
  };

  return (
    <div className="App  mx-auto my-5">
      <nav className="flex justify-center gap-20">
        <button
          onClick={arrayReduceHandler}
          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Total Price</span>
        </button>

        <button
          onClick={arrayMapHandler}
          className="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto"
        >
          Inventory
        </button>

        <button
          onClick={arraySortHandler}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white">Price Sort</span>
          </span>
        </button>

        <button
          onClick={arrayFilterHandler}
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          data-rounded="rounded-md"
          data-primary="blue-600"
          data-primary-reset="{}"
        >
          SALE
        </button>
      </nav>

      <section className="py-5">
        {componentToShow === "reduce" && <ArrayReduce />}
        {componentToShow === "sort" && <ArraySort />}
        {componentToShow === "map" && <ArrayMap />}
        {componentToShow === "filter" && <ArrayFilter />}
      </section>
    </div>
  );
}

export default App;
