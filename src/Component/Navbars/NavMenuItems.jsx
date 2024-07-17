import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenuItems = () => {
  //state
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch authors and categories
  useEffect(() => {
    const fetchAuthorsAndCategories = async () => {
      try {
        const [categoryResponse] = await Promise.all([
          axios.get("http://localhost:8080/api/admin/newsCategory"),
        ]);

        if (categoryResponse.data.Status) {
          setCategories(categoryResponse.data.Result);
        } else {
          setErrorMessage("Failed to fetch authors or categories");
        }
      } catch (err) {
        console.error("Error fetching authors or categories:", err);
      }
    };

    fetchAuthorsAndCategories();
  }, []);

  return (
    <>
      <nav className="grid grid-cols-2 gap-y-4 gap-x-8 md:gap-x-9 lg:gap-x-40 lg:gap-y-0">
        {categories.map((cat) => (
          <NavLink
            key={cat.ID}
            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
            to={`/category/${cat.name}`}
          >
            {cat.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default NavMenuItems;
