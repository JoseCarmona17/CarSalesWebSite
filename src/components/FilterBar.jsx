import React from "react";
import { FaSearch, FaSyncAlt } from "react-icons/fa";

const FilterBar = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      {/* Filtros en dos filas de 5 */}
      <div className="grid grid-cols-5 gap-4">
        <select className="p-3 bg-white border rounded-lg"> <option>Make</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Model</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Type</option> </select>
        <div className="flex space-x-2">
          <input type="text" placeholder="Min Price" className="p-3 bg-white border rounded-lg w-1/2" />
          <input type="text" placeholder="Max Price" className="p-3 bg-white border rounded-lg w-1/2" />
        </div>
        <select className="p-3 bg-white border rounded-lg"> <option>Mileage</option> </select>

        <select className="p-3 bg-white border rounded-lg"> <option>Drive Type</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Fuel Type</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Features</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Transmission</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Color</option> </select>

        <select className="p-3 bg-white border rounded-lg"> <option>Doors</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Safety Features</option> </select>
        <select className="p-3 bg-white border rounded-lg"> <option>Cylinders</option> </select>
        <div className="flex space-x-2">
          <input type="text" placeholder="Min Year" className="p-3 bg-white border rounded-lg w-1/2" />
          <input type="text" placeholder="Max Year" className="p-3 bg-white border rounded-lg w-1/2" />
        </div>
        <select className="p-3 bg-white border rounded-lg"> <option>VIN</option> </select>
      </div>

      {/* Botones adicionales */}
      <div className="flex justify-between items-center mt-4">
        <button className="text-orange-500 text-sm flex items-center">
          <FaSyncAlt className="mr-1" /> Clear all
        </button>
        <button className="text-orange-500 text-sm">More filters ⌄</button>
      </div>

      {/* Barra de búsqueda y opciones */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-6 text-gray-500 text-lg">
          <span className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-1">All (20)</span>
          <span>New (0)</span>
          <span>Used (20)</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600">
            <FaSyncAlt className="mr-1" /> Compare
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter keyword"
              className="p-3 pl-4 pr-10 bg-white border rounded-lg w-64"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
