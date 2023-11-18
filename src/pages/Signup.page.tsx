import { useEffect, useState } from "react";
import { auth, signup } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const handleSignup = () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        console.log("Passwords do not match");
        // You can set an error state here if you want to display an error message.
        return;
      }

      signup(email, password);
    } catch (error) {
      console.log("Errored! Display error message");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/wallet");
  }, [user, loading]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-400">
          Sign Up
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full rounded-md bg-gray-500 text-black placeholder-gray-800 text-md  focus:outline-none focus:ring focus:ring-gray-200"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full rounded-md bg-gray-500 text-black placeholder-gray-800 text-md focus:outline-none focus:ring focus:ring-gray-200"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-400"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 w-full rounded-md bg-gray-500 text-black placeholder-gray-800 text-md focus:outline-none focus:ring focus:ring-gray-200"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleSignup}
            className="w-full py-2 px- text-lg bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
