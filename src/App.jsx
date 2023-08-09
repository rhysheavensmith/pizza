import React, { useState, useEffect } from "react";
import pizzaData from "../public/data";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

export default function App() {
  // set state for time and search
  const [currentTime, setCurrentTime] = useState(new Date());
  const [search, setSearch] = useState("");

  // function to set and display time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Cleanup: clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  // function to search pizzas
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const orderPizza = () => {
    alert("Pizza Ordered!");
  };

  return (
    <>
      <main>
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <Search handleSearch={handleSearch} />
        </div>

        <div className="pizza-card">
          {pizzaData
            .filter((pizza) =>
              pizza.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pizza) => {
              return (
                <Menu key={pizza.id} data={pizza} orderPizza={orderPizza} />
              );
            })}
        </div>
        <div className="container">
          <Footer currentTime={currentTime} />
        </div>
      </main>
    </>
  );
}
