import React, { useState, useRef, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="w-12 h-12">
        <img src="assets/images/admin-pic.png"/>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left:0 md:right-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
          <div className="p-4 border-b">
            <p className="font-bold">Ahmed Kamel</p>
            <p className="text-sm text-gray-500">ahmed.kamel@example.com</p>
          </div>
          <ul>
            <li>
              <a
                href="#link1"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Link 1
              </a>
            </li>
            <li>
              <a
                href="#link2"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Link 2
              </a>
            </li>
          </ul>
          <div className="border-t">
            <a
              href="#logout"
              className="block px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
