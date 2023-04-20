import React from "react";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
        <footer className="bg-gray-900 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; The Kitchen 2023</p>
          </div>
        </footer>
  );
}

export default Footer;
