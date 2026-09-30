import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import moon from "../../assets/icons/moon.svg";
import shoppingCard from "../../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import MovieCart from "../MovieCart/MovieCart";
import { MovieContext } from "../../context";

const Header = () => {
  const [showMovieCart, setShowMovieCart] = useState(false);
  const { cartData } = useContext(MovieContext);

  const handleShowMovieCard = () => {
    setShowMovieCart(true);
  };

  return (
    <header>
      {showMovieCart && <MovieCart onClose={() => setShowMovieCart(false)} />}

      <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
        <a href="">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={shoppingCard}
                width="24"
                height="24"
                alt="cart"
                onClick={handleShowMovieCard}
              />

              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[24px] bg-[#12cf6f] text-white text-center p-1 w-7.5 h-7.5">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
