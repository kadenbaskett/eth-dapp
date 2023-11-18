import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Automated Crypto Swapping DApp
        </h1>
        <p className="text-lg mb-8">
          Welcome to our DApp! Automate the periodic swapping of
          cryptocurrencies effortlessly.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-black px-6 py-4 rounded-lg hover:bg-gray-900 font-semibold"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-black px-6 py-4 rounded-lg hover:bg-gray-900 font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
