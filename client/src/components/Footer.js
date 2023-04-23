import React from "react";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="mt-14 bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; The Kitchen 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
