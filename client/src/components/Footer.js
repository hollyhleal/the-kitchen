import React from "react";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
    
  return (
      <div className="footer" id="footer">
          <div className="main">
      {/* <form className="bg-white rounded-lg p-4" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Sign Up for a newsletter
        </button>

        <label htmlFor="email" className="block mb-2 text-gray-800"></label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-hlf py-2 px-3 border border-gray-400 rounded-lg mb-4"
        />
              </form>
              */}

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; The Kitchen {new Date().getFullYear()}</p>
        </div>
      </footer>
          </div>
          </div>
  );
}

export default Footer;
