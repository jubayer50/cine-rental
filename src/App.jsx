import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import Sidebar from "./Components/Sidebar/Sidebar";
import { MovieContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Header />

      <main>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />

          <MovieList />
        </div>
      </main>

      <Footer />
    </MovieContext.Provider>
  );
};

export default App;
